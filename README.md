# 🔋 AI-Driven Cell Balancing and Temperature Prediction in Lithium-Ion Batteries

## 📌 Overview

This project presents an AI-driven Battery Management System (BMS) that integrates **temperature prediction** using Machine Learning with a **passive cell balancing mechanism** to improve battery safety, efficiency, and lifespan.

The system uses a **Random Forest Regression model** to predict battery temperature based on real-time parameters and applies **logic-based passive balancing** to maintain uniform charge distribution across cells.

---

## 🚀 Features

* 🔥 AI-based Temperature Prediction (Random Forest)
* ⚖️ Passive Cell Balancing (Voltage equalization logic)
* 📊 Real-time Prediction & Monitoring
* ⚠️ Safety Classification (Normal / Warning)
* 🌐 Web Dashboard (React + Flask)
* 📉 Performance Metrics (MAE, RMSE, R²)

---

## 🧠 Machine Learning Model

* Model: Random Forest Regressor

* Trees: 50

* Features:

  * Voltage (V)
  * Current (I)
  * State of Charge (SoC)
  * Capacity (C)
  * Internal Resistance (Rint)
  * Cycle Count
  * Time Step

* Preprocessing: StandardScaler

---

## ⚖️ Cell Balancing Logic

The system implements **Passive Cell Balancing** using a simulation-based approach:

* Detect imbalance using:

  ```
  max(cell_voltages) - min(cell_voltages) > 0.05V
  ```
* Reduce highest voltage cell iteratively
* Continue until cells are balanced

---

## 🏗️ System Architecture

1. Data Input (User / Dataset)
2. Feature Scaling (StandardScaler)
3. ML Model Prediction (Random Forest)
4. Threshold Check (36°C)
5. Passive Balancing Logic
6. Output to Dashboard

---

## 🛠️ Tech Stack

* **Backend:** Flask, Python
* **Frontend:** React.js
* **ML:** Scikit-learn
* **Data:** Pandas, NumPy

---

## 📊 Performance Metrics

* MAE ≈ 0.81
* RMSE ≈ 1.17
* R² ≈ 0.93

---

## 📁 Dataset

Synthetic dataset with 40,000+ samples including:

* Voltage
* Current
* Temperature
* SoC
* Capacity
* Internal Resistance

---

## ▶️ How to Run

### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔗 Project Links

* 📄 Research Paper: (Add link)
* 🎥 Demo Video: (Optional)
* 💻 GitHub Repo: (This repo)

---

## 👨‍💻 Authors

* Mohammad Ahmed Ansari
* Prathamesh Patil
* Sagar Ghat

---

## 📜 License

This project is for academic purposes.
