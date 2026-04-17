from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import numpy as np

from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Battery Temperature Prediction API is Running ✅"})

model = joblib.load("battery_temp_model.pkl")
scaler = joblib.load("scaler.pkl")

TEMPERATURE_THRESHOLD = 36.0

@app.route("/predict", methods=["POST"])

def predict_temperature():
    data = request.json
    try:
        features = [
            float(data["voltage"]),
            float(data["current"]),
            float(data["soc"]),
            float(data["capacity"]),
            float(data["internal_resistance"]),
            float(data["cycle"]),
            float(data["time_step"]),
        ]
    except:
        return jsonify({"error": "Missing or invalid input"}), 400

    X = scaler.transform([features])
    pred = model.predict(X)[0]
    pred = float(round(pred, 2))

    if pred > TEMPERATURE_THRESHOLD:
        status = "WARNING"
        message = "Temperature has risen above safe limit. Take measures."
    else:
        status = "NORMAL"
        message = "Temperature is within safe limit."

    return jsonify({
        "predicted_temperature": pred,
        "status": status,
        "message": message
    })

if __name__ == "__main__":
    app.run(port=8000, debug=True)