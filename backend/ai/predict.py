import sys
import json
import joblib
import pandas as pd

# Load trained model
model = joblib.load("nap_model.pkl")

# Read input from Node
input_json = sys.argv[1]
data = json.loads(input_json)

available_start = data.get("availableStart", 13)
available_end = data.get("availableEnd", 17)
nap_duration = 0.5  # 30 minutes

# Prepare features for model
df = pd.DataFrame([{
    "day_of_week": data.get("dayOfWeek"),
    "available_start": available_start,
    "available_end": available_end,
    "sleep_hours": data.get("sleepHours", 7)
}])

# Predict nap start
predicted_start = model.predict(df)[0]

# Clamp within availability
nap_start = max(predicted_start, available_start)
nap_start = min(nap_start, available_end - nap_duration)

nap_end = nap_start + nap_duration

result = {
    "recommended_nap_start": round(nap_start, 2),
    "recommended_nap_end": round(nap_end, 2)
}

print(json.dumps(result))
