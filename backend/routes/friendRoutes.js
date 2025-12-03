import express from "express";
import path from "path";
import { pool } from "../db.js";
import { randomUUID } from "crypto"; // built-in in Node.js v14+
import { Console } from "console";

const router = express.Router();
const __dirname = path.resolve();

// Check Login
function requireLogin(req, res) {
  if (!req.session || !req.session.user) {
    res.status(401).json({ error: "Not logged in" });
    return false;
  }
  return true;
}

// GET: Search user
router.get("/search", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const q = (req.query.q || "").trim();
  const currentUserId = req.session.user.userid || req.session.user.id;

  if (!q) {
    return res.json([]);
  }

  try {
    const result = await pool.query(
      `
      SELECT
        u.userid        AS id,
        u.name        AS username,
        u.email,
        u.cityname,
        p.display_name  AS "displayName"
      FROM "User" u
      JOIN "userprofile" p
        ON p.userid = u.userid
      WHERE u.userid <> $1
        AND (
          u.name     ILIKE '%' || $2 || '%' OR
          u.email     ILIKE '%' || $2 || '%' OR
          p.display_name ILIKE '%' || $2 || '%' OR
          u.cityname     ILIKE '%' || $2 || '%'
        )
      ORDER BY p.display_name, u.name
      `,
      [currentUserId, q]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("search error", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST: Request friend
router.post("/requests", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const fromUserId = req.session.user.id;
  const { friend_user_id } = req.body;
  const toUserId = friend_user_id;

  if (!fromUserId) {
    console.error("sendRequest: session.user.id is missing", req.session.user);
    return res.status(500).json({ error: "Session user id missing" });
  }

  if (!toUserId || toUserId === fromUserId) {
    return res.status(400).json({ error: "Invalid friend_user_id" });
  }

  try {
    // Check if the users are already friends
    const friendCheck = await pool.query(
      `
      SELECT 1
      FROM "friendships"
      WHERE userid = $1 AND friend_userid = $2
      `,
      [fromUserId, toUserId]
    );
    if (friendCheck.rowCount > 0) {
      return res.status(400).json({ error: "Already friends" });
    }

    // Check if an existing pending request already exists
    const reqCheck = await pool.query(
      `
      SELECT 1
      FROM "friend_requests"
      WHERE status = 'pending'
        AND (
          (from_userid = $1 AND to_userid = $2)
       OR (from_userid = $2 AND to_userid = $1)
        )
      `,
      [fromUserId, toUserId]
    );
    if (reqCheck.rowCount > 0) {
      return res.status(400).json({ error: "Request already pending" });
    }

    // INSERT id, from_userid, to_userid
    const newId = randomUUID();
    const insertResult = await pool.query(
      `
      INSERT INTO "friend_requests" (id, from_userid, to_userid, status)
      VALUES ($1, $2, $3, 'pending')
      RETURNING id
      `,
      [newId, fromUserId, toUserId]
    );

    return res.status(201).json({ id: insertResult.rows[0].id });
  } catch (err) {
    console.error("sendRequest error", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET: Search request list -> /api/friends/requests?type=all
// return { incoming: [...], outgoing: [...] }
router.get("/requests", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const userId = req.session.user.id;

  try {
    // incoming: pending request where I am the to_userid
    const incomingResult = await pool.query(
      `
      SELECT
        fr.id,
        u_from.userid       AS "fromId",
        u_from.name     AS "fromUsername",
        p_from.display_name AS "fromDisplayName"
      FROM "friend_requests" fr
      JOIN "User" u_from
        ON u_from.userid = fr.from_userid
      JOIN "userprofile" p_from
        ON p_from.userid = u_from.userid
      WHERE fr.to_userid = $1
        AND fr.status = 'pending'
      ORDER BY fr.created_at DESC
      `,
      [userId]
    );

    // outgoing: pending request where I am the from_userid
    const outgoingResult = await pool.query(
      `
      SELECT
        fr.id,
        u_to.userid       AS "toId",
        u_to.name     AS "toUsername",
        p_to.display_name AS "toDisplayName"
      FROM "friend_requests" fr
      JOIN "User" u_to
        ON u_to.userid = fr.to_userid
      JOIN "userprofile" p_to
        ON p_to.userid = u_to.userid
      WHERE fr.from_userid = $1
        AND fr.status = 'pending'
      ORDER BY fr.created_at DESC
      `,
      [userId]
    );

    const incoming = incomingResult.rows.map(r => ({
      id: r.id,
      from: {
        id: r.fromId,
        username: r.fromUsername,
        displayName: r.fromDisplayName
      }
    }));

    const outgoing = outgoingResult.rows.map(r => ({
      id: r.id,
      to: {
        id: r.toId,
        username: r.toUsername,
        displayName: r.toDisplayName
      }
    }));

    res.json({ incoming, outgoing });
  } catch (err) {
    console.error("listRequests error", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST (Accept): /api/friends/requests/:id/accept
router.post("/requests/:id/accept", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const userId = req.session.user.id;
  const requestId = req.params.id;

  try {
    // 1) Update the request status to "accepted" and retrieve the from/to relationship
    const updateResult = await pool.query(
      `
      UPDATE "friend_requests"
      SET status = 'accepted'
      WHERE id = $1
        AND to_userid = $2
        AND status = 'pending'
      RETURNING from_userid, to_userid
      `,
      [requestId, userId]
    );

    if (updateResult.rowCount === 0) {
      return res.status(404).json({ error: "Request not found" });
    }

    const { from_userid, to_userid } = updateResult.rows[0];

    // 2) Insert a bidirectional relationship into the friendships table
    await pool.query(
      `
      INSERT INTO "friendships" (userid, friend_userid)
      VALUES ($1, $2), ($2, $1)
      ON CONFLICT DO NOTHING
      `,
      [from_userid, to_userid]
    );

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("acceptRequest error", err);
    return res.status(500).json({ error: "Server error" });
  }
});

//POST (Decline): /api/friends/requests/:id/decline
router.post("/requests/:id/decline", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const userId = req.session.user.id;
  const requestId = req.params.id;

  try {
    const result = await pool.query(
      `
      UPDATE "friend_requests"
      SET status = 'declined'
      WHERE id = $1
        AND to_userid = $2   -- received person
        AND status = 'pending'
      RETURNING id
      `,
      [requestId, userId]
    );

    if (result.rowCount === 0) {
      // Cases where the pending request is either not sent by me or has already been processed
      return res.status(404).json({ error: "Request not found" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("declineRequest error", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// DELETE (Cancel request): /api/friends/requests/:id
router.delete("/requests/:id", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const userId = req.session.user.id;
  const requestId = req.params.id;

  try {
    const result = await pool.query(
      `
      DELETE FROM "friend_requests"
      WHERE id = $1 AND from_userid = $2 AND status = 'pending'
      `,
      [requestId, userId]
    );

    if (result.rowCount === 0) {
      // Cases where the pending request is either not sent by me or has already been processed
      return res.status(404).json({ error: "Request not found" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("cancelRequest error", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET (friends list) : /api/friends
router.get("/", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const userId = req.session.user.id;

  try {
    const result = await pool.query(
      `
      SELECT
        u.userid       AS id,
        u.name     AS username,
        u.cityname         AS city,
        p.display_name AS "displayName"
      FROM "friendships" f
      JOIN "User" u
        ON u.userid = f.friend_userid
      JOIN "userprofile" p
        ON p.userid = u.userid
      WHERE f.userid = $1
      ORDER BY p.display_name NULLS LAST, u.name
      `,
      [userId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("listFriends error", err);
    res.status(500).json({ error: "Server error" });
  }
});


//DELETE : /api/friends/:friendUserId
router.delete("/:friendId", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const userId = req.session.user.id;
  const friendId = req.params.friendId;

  if (!friendId || friendId === userId) {
    return res.status(400).json({ error: "Invalid friend id" });
  }

  try {
    const result = await pool.query(
      `
      DELETE FROM "friendships"
      WHERE (userid = $1 AND friend_userid = $2)
         OR (userid = $2 AND friend_userid = $1)
      `,
      [userId, friendId]
    );

    // Even if result.rowCount is 0, returning 200 is fine (case: they were already not friends)
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("unfriend error", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET /api/friends/profile/:id
router.get("/profile/:id", async (req, res) => {
  if (!requireLogin(req, res)) return;

  const targetUserId = req.params.id;
  const currentUserId = req.session.user.id;

  try {
    const result = await pool.query(
      `
      SELECT
        u.userid        AS id,
        u.name      AS username,
        u.email         AS email,
        u.cityname          AS city,
        u.created_at    AS "memberSince",
        p.display_name  AS "displayName",
        p.bio           AS bio,
        p.website       AS website,
        COALESCE( (p.settings->>'privateProfile')::boolean, false ) AS "privateProfile"
      FROM "User" u
      LEFT JOIN "userprofile" p
        ON p.userid = u.userid
      WHERE u.userid = $1
      `,
      [targetUserId]
    );

    const profile = result.rows[0];
    if (!profile) return res.status(404).json({ error: "User not found" });

    if (profile.privateProfile === true && targetUserId !== targetUserId) {
      return res.status(403).json({ private: true });
    }

    return res.json(profile);
  } catch (err) {
    console.error("get profile error", err);
    return res.status(500).json({ error: "Server error" });
  }
});


export default router;