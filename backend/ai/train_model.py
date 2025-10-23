# ai/train_model.py
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load training data
df = pd.read_csv("nap_data.csv")

# Features: day_of_week, available_start, available_end, sleep_hours
X = df[["day_of_week", "available_start", "available_end", "sleep_hours"]]
# Target: nap_start_time
y = df["nap_start_time"]

model = RandomForestRegressor(n_estimators=100)
model.fit(X, y)

# Save model
joblib.dump(model, "nap_model.pkl")
print("Model trained and saved!")
