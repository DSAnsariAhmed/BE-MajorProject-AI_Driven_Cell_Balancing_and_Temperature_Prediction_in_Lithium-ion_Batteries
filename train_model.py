import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib
import os

DATA_PATH = "../data/synthetic_battery_data.csv"
OUT_DIR = "./"

df = pd.read_csv(DATA_PATH)

# Cleanup
df = df.dropna(how="all")
df = df.dropna(subset=["temperature"])

feature_cols = ["voltage", "current", "soc", "capacity", 
                "internal_resistance", "cycle", "time_step"]
target = "temperature"

X = df[feature_cols]
y = df[target]

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42, shuffle=True
)

# Scale
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = RandomForestRegressor(n_estimators=50, random_state=42)
model.fit(X_train_scaled, y_train)

# Evaluate
preds = model.predict(X_test_scaled)
print("MAE:", mean_absolute_error(y_test, preds))
print("MSE:", mean_squared_error(y_test, preds))
print("R² :", r2_score(y_test, preds))

# Save model + scaler
joblib.dump(model, "battery_temp_model.pkl")
joblib.dump(scaler, "scaler.pkl")

# Save sample predictions
sample = X_test.iloc[:200].copy()
sample["true_temperature"] = y_test.iloc[:200]
sample["pred_temperature"] = model.predict(X_test_scaled[:200])
sample.to_csv("sample_predictions.csv", index=False)

print("Model + scaler + sample_predictions saved!")