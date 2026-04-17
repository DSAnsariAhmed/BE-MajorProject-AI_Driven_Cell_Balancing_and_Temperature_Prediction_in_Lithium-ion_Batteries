// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [form, setForm] = useState({
//     voltage: "",
//     current: "",
//     soc: "",
//     capacity: "",
//     internal_resistance: "",
//     cycle: "",
//     time_step: "",
//   });

//   const [res, setRes] = useState(null);
//   const [err, setErr] = useState("");

//   const handle = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const predict = async () => {
//     try {
//       setErr("");
//       const r = await axios.post("http://127.0.0.1:8000/predict", form);
//       setRes(r.data);
//     } catch {
//       setErr("Backend not reachable ❌");
//     }
//   };

//   return (
//     <div style={{ padding: 20, fontFamily: "Arial" }}>
//       <h2>🔋 Battery Temperature Monitor</h2>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: 380 }}>
//         {Object.keys(form).map((k) => (
//           <div key={k}>
//             <label style={{ fontSize: 13, textTransform: "capitalize" }}>
//               {k.replace("_", " ")}
//             </label>
//             <input
//               type="number"
//               step="any"
//               name={k}
//               value={form[k]}
//               onChange={handle}
//               placeholder={k}
//               style={{
//                 width: "100%",
//                 padding: 8,
//                 marginTop: 4,
//                 borderRadius: 6,
//                 border: "1px solid #ccc",
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={predict}
//         style={{
//           width: 380,
//           padding: 10,
//           marginTop: 14,
//           borderRadius: 8,
//           border: "none",
//           background: "#2563eb",
//           color: "white",
//           fontWeight: 600,
//           cursor: "pointer",
//         }}
//       >
//         Predict
//       </button>

//       {err && (
//         <div
//           style={{
//             width: 380,
//             marginTop: 12,
//             padding: 10,
//             borderRadius: 8,
//             background: "#fee2e2",
//             color: "#b91c1c",
//             fontSize: 13,
//           }}
//         >
//           {err}
//         </div>
//       )}

//       {res && (
//         <div
//           style={{
//             width: 380,
//             marginTop: 16,
//             padding: 14,
//             borderRadius: 10,
//             background: res.status === "WARNING" ? "#fecaca" : "#bbf7d0",
//             border:
//               res.status === "WARNING"
//                 ? "1px solid #f87171"
//                 : "1px solid #22c55e",
//           }}
//         >
//           <h3 style={{ margin: "0 0 6px 0" }}>
//             Temp: {(res.temperature ?? res.predicted_temperature) ?? "N/A"} °C
//           </h3>
//           <p
//             style={{
//               margin: 0,
//               fontWeight: "bold",
//               color: res.status === "WARNING" ? "#b91c1c" : "#166534",
//             }}
//           >
//             {res.status}
//           </p>
//           <p style={{ fontSize: 13, marginTop: 4 }}>{res.message}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [form, setForm] = useState({
//     voltage: "",
//     current: "",
//     soc: "",
//     capacity: "",
//     internal_resistance: "",
//     cycle: "",
//     time_step: "",
//   });

//   const [res, setRes] = useState(null);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const predict = async () => {
//     try {
//       setErr("");
//       setRes(null);
//       setLoading(true);
//       const r = await axios.post("http://127.0.0.1:8000/predict", form);
//       setRes(r.data);
//     } catch {
//       setErr("Backend not reachable ❌  (Check if Flask is running on port 8000)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const statusColor =
//     res?.status === "WARNING"
//       ? "#991b1b"
//       : "#166534";

//   const statusBg =
//     res?.status === "WARNING"
//       ? "#fee2e2"
//       : "#dcfce7";

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         margin: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 24,
//         background:
//           "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f766e 100%)",
//         color: "#0f172a",
//         fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: 520,
//           background: "rgba(248, 250, 252, 0.98)",
//           borderRadius: 20,
//           boxShadow: "0 18px 45px rgba(15,23,42,0.45)",
//           padding: 22,
//           border: "1px solid rgba(148, 163, 184, 0.4)",
//           backdropFilter: "blur(8px)",
//           transition: "transform 0.25s ease, box-shadow 0.25s ease",
//         }}
//       >
//         {/* Header */}
//         <div style={{ marginBottom: 18 }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               padding: "4px 10px",
//               borderRadius: 999,
//               background: "rgba(37, 99, 235, 0.08)",
//               color: "#1d4ed8",
//               fontSize: 11,
//               fontWeight: 600,
//               letterSpacing: "0.06em",
//               textTransform: "uppercase",
//             }}
//           >
//             🔋 AI • Li-ion Safety
//           </div>

//           <h2
//             style={{
//               margin: "10px 0 4px",
//               fontSize: 22,
//               fontWeight: 700,
//               color: "#020617",
//             }}
//           >
//             AI-Driven Battery Temperature Prediction
//           </h2>

//           <p
//             style={{
//               margin: 0,
//               fontSize: 12.5,
//               color: "#6b7280",
//             }}
//           >
//             Enter live cell parameters and let the model estimate the core
//             temperature, then flag if it’s within the safe operating range.
//           </p>
//         </div>

//         {/* Form */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 10,
//             marginTop: 8,
//           }}
//         >
//           {Object.keys(form).map((k) => (
//             <div key={k}>
//               <label
//                 style={{
//                   fontSize: 11.5,
//                   textTransform: "capitalize",
//                   color: "#6b7280",
//                   display: "block",
//                   marginBottom: 2,
//                 }}
//               >
//                 {k.replace("_", " ")}
//               </label>
//               <input
//                 type="number"
//                 step="any"
//                 name={k}
//                 value={form[k]}
//                 onChange={handle}
//                 placeholder={k}
//                 style={{
//                   width: "100%",
//                   padding: "7px 9px",
//                   borderRadius: 8,
//                   border: "1px solid #e5e7eb",
//                   fontSize: 13,
//                   outline: "none",
//                   backgroundColor: "#f9fafb",
//                   transition:
//                     "border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease",
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.borderColor = "#2563eb";
//                   e.target.style.boxShadow = "0 0 0 1px rgba(37,99,235,0.2)";
//                   e.target.style.backgroundColor = "#ffffff";
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.borderColor = "#e5e7eb";
//                   e.target.style.boxShadow = "none";
//                   e.target.style.backgroundColor = "#f9fafb";
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Predict Button */}
//         <button
//           onClick={predict}
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: "10px 12px",
//             marginTop: 16,
//             borderRadius: 999,
//             border: "none",
//             background: loading
//               ? "linear-gradient(135deg, #60a5fa, #4ade80)"
//               : "linear-gradient(135deg, #2563eb, #22c55e)",
//             color: "white",
//             fontWeight: 600,
//             fontSize: 14,
//             cursor: loading ? "wait" : "pointer",
//             boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
//             transform: loading ? "scale(0.99)" : "scale(1)",
//             transition:
//               "transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease",
//             opacity: loading ? 0.85 : 1,
//           }}
//           onMouseEnter={(e) => {
//             if (!loading) {
//               e.currentTarget.style.transform = "translateY(-1px)";
//               e.currentTarget.style.boxShadow =
//                 "0 14px 32px rgba(34,197,94,0.45)";
//             }
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = loading ? "scale(0.99)" : "scale(1)";
//             e.currentTarget.style.boxShadow =
//               "0 10px 25px rgba(37,99,235,0.35)";
//           }}
//         >
//           {loading ? "Predicting…" : "Predict Temperature"}
//         </button>

//         {/* Error box */}
//         {err && (
//           <div
//             style={{
//               marginTop: 12,
//               padding: 10,
//               borderRadius: 10,
//               background: "#fef2f2",
//               border: "1px solid #fecaca",
//               color: "#b91c1c",
//               fontSize: 12.5,
//             }}
//           >
//             {err}
//           </div>
//         )}

//         {/* Result card */}
//         {res && (
//           <div
//             style={{
//               marginTop: 16,
//               padding: 14,
//               borderRadius: 14,
//               background: statusBg,
//               border:
//                 res.status === "WARNING"
//                   ? "1px solid #f97373"
//                   : "1px solid #4ade80",
//               boxShadow:
//                 res.status === "WARNING"
//                   ? "0 10px 20px rgba(248,113,113,0.25)"
//                   : "0 10px 20px rgba(74,222,128,0.25)",
//               transition: "transform 0.18s ease, box-shadow 0.18s ease",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "baseline",
//                 marginBottom: 4,
//               }}
//             >
//               <h3
//                 style={{
//                   margin: 0,
//                   fontSize: 18,
//                   fontWeight: 700,
//                   color: "#020617",
//                 }}
//               >
//                 Temp:{" "}
//                 {(res.temperature ?? res.predicted_temperature)?.toFixed(2) ??
//                   "N/A"}{" "}
//                 °C
//               </h3>

//               <span
//                 style={{
//                   padding: "3px 10px",
//                   borderRadius: 999,
//                   fontSize: 11,
//                   fontWeight: 600,
//                   backgroundColor:
//                     res.status === "WARNING" ? "#fee2e2" : "#dcfce7",
//                   color: statusColor,
//                   textTransform: "uppercase",
//                   letterSpacing: "0.06em",
//                 }}
//               >
//                 {res.status || "STATUS"}
//               </span>
//             </div>

//             <p
//               style={{
//                 margin: "4px 0 0",
//                 fontSize: 13,
//                 color: statusColor,
//                 fontWeight: 500,
//               }}
//             >
//               {res.message}
//             </p>

//             <p
//               style={{
//                 margin: "8px 0 0",
//                 fontSize: 11.5,
//                 color: "#4b5563",
//               }}
//             >
//               This decision is based on a data-driven model trained on historical
//               Li-ion battery behaviour and a safety threshold of 45°C.
//             </p>
//           </div>
//         )}

//         {/* Footer note */}
//         <div
//           style={{
//             marginTop: 16,
//             fontSize: 11,
//             color: "#9ca3af",
//             textAlign: "right",
//           }}
//         >
//           ⚙️ Mode: Inference only · Model trained offline on synthetic Li-ion
//           dataset
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [form, setForm] = useState({
//     voltage: "",
//     current: "",
//     soc: "",
//     capacity: "",
//     internal_resistance: "",
//     cycle: "",
//     time_step: "",
//   });

//   const [res, setRes] = useState(null);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const predict = async () => {
//     try {
//       setErr("");
//       setRes(null);
//       setLoading(true);
//       const r = await axios.post("http://127.0.0.1:8000/predict", form);
//       setRes(r.data);
//     } catch {
//       setErr("Prediction failed ❌ (Backend not reachable or invalid input)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: "linear-gradient(to bottom right, #111827, #065f46)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         overflow: "auto",
//       }}
//     >
//       {/* MAIN CARD */}
//       <div
//         style={{
//           width: "90%",
//           maxWidth: 600,
//           background: "white",
//           padding: 28,
//           borderRadius: 18,
//           boxShadow: "0 14px 35px rgba(0,0,0,0.45)",
//         }}
//       >
//         {/* HEADER */}
//         <div style={{ textAlign: "center", marginBottom: 24 }}>
//           <div
//             style={{
//               display: "inline-block",
//               padding: "5px 12px",
//               background: "#dbeafe",
//               color: "#1e40af",
//               borderRadius: 30,
//               fontSize: 12,
//               fontWeight: 700,
//               marginBottom: 8,
//             }}
//           >
//             ⚡ AI · LI-ION SAFETY
//           </div>
//           <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0 }}>
//             AI-Driven Battery Temperature Prediction
//           </h1>
//           <p style={{ marginTop: 6, color: "#4b5563", fontSize: 13 }}>
//             Enter cell parameters → model predicts temperature & flags safety
//           </p>
//         </div>

//         {/* INPUT GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2,1fr)",
//             gap: 14,
//           }}
//         >
//           {Object.keys(form).map((k) => (
//             <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <label
//                 style={{
//                   fontSize: 12,
//                   fontWeight: 600,
//                   color: "#374151",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {k.replace("_", " ")}
//               </label>
//               <input
//                 type="number"
//                 step="any"
//                 name={k}
//                 value={form[k]}
//                 onChange={handle}
//                 placeholder={`Enter ${k}`}
//                 style={{
//                   padding: 10,
//                   borderRadius: 10,
//                   border: "1.5px solid #cbd5e1",
//                   fontSize: 14,
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* PREDICT BUTTON */}
//         <div style={{ textAlign: "center", marginTop: 28 }}>
//           <button
//             onClick={predict}
//             disabled={loading}
//             style={{
//               width: "85%",
//               padding: 14,
//               borderRadius: 40,
//               border: "none",
//               background: loading
//                 ? "linear-gradient(90deg, #60a5fa, #34d399)"
//                 : "linear-gradient(90deg, #2563eb, #059669)",
//               color: "white",
//               fontWeight: 700,
//               fontSize: 15,
//               cursor: loading ? "wait" : "pointer",
//               transition: "0.2s",
//             }}
//             onMouseEnter={(e) => {
//               if (!loading) e.currentTarget.style.transform = "scale(1.03)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//             }}
//           >
//             {loading ? "Predicting…" : "Predict Temperature"}
//           </button>
//         </div>

//         {/* ERROR */}
//         {err && (
//           <div
//             style={{
//               marginTop: 18,
//               background: "#fecaca",
//               color: "#7f1d1d",
//               padding: 12,
//               borderRadius: 12,
//               fontSize: 13,
//               fontWeight: 600,
//               textAlign: "center",
//             }}
//           >
//             {err}
//           </div>
//         )}
//       </div>

//       {/* RESULT CARD BELOW */}
//       {res && (
//         <div
//           style={{
//             width: "90%",
//             maxWidth: 600,
//             marginTop: 22,
//             background: res.status === "WARNING" ? "#fee2e2" : "#d1fae5",
//             color: res.status === "WARNING" ? "#991b1b" : "#065f46",
//             padding: 18,
//             borderRadius: 16,
//             border: `2px solid ${res.status === "WARNING" ? "#f87171" : "#10b981"}`,
//             boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
//             animation: "fadeIn 0.6s ease",
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>
//               Temp: {res.predicted_temperature} °C
//             </h2>
//             <div
//               style={{
//                 display: "inline-block",
//                 padding: "3px 16px",
//                 borderRadius: 30,
//                 fontSize: 13,
//                 fontWeight: 700,
//                 background: "white",
//                 marginTop: 6
//               }}
//             >
//               {res.status}
//             </div>
//             <p style={{ marginTop: 10, fontSize: 14, fontWeight: 600 }}>
//               {res.message}
//             </p>
//             <p style={{ fontSize: 12.5, opacity: 0.8, marginTop: 10 }}>
//               Threshold: 45°C (safe limit)
//             </p>
//           </div>
//         </div>
//       )}

//       {/* OPTIONAL – Add this global animation style once */}
//       <style>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; transform: translateY(12px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [form, setForm] = useState({
//     voltage: "",
//     current: "",
//     soc: "",
//     capacity: "",
//     internal_resistance: "",
//     cycle: "",
//     time_step: "",
//   });

//   const [res, setRes] = useState(null);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const predict = async () => {
//     try {
//       setErr("");
//       setRes(null);
//       setLoading(true);
//       const r = await axios.post("http://127.0.0.1:8000/predict", form);
//       setRes(r.data);
//     } catch {
//       setErr("Prediction failed ❌  (Is backend running on port 8000?)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const tempValue =
//     res && (res.temperature ?? res.predicted_temperature);
//   const statusColor =
//     res?.status === "WARNING" ? "#fee2e2" : "#dcfce7";
//   const statusTextColor =
//     res?.status === "WARNING" ? "#991b1b" : "#166534";

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         background:
//           "radial-gradient(circle at top left, #1f2937 0, #020617 40%, #064e3b 100%)",
//         color: "#e5e7eb",
//         boxSizing: "border-box",
//         padding: 24,
//         gap: 20,
//       }}
//     >
//       {/* LEFT SIDE – INPUTS */}
//       <div
//         style={{
//           flex: "0 0 420px",
//           maxWidth: 420,
//           background: "rgba(248,250,252,0.98)",
//           borderRadius: 18,
//           padding: 22,
//           boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
//           color: "#111827",
//           boxSizing: "border-box",
//           overflowY: "auto",
//         }}
//       >
//         {/* Header */}
//         <div style={{ marginBottom: 16 }}>
//           <div
//             style={{
//               display: "inline-block",
//               padding: "4px 10px",
//               borderRadius: 999,
//               background: "#dbeafe",
//               color: "#1d4ed8",
//               fontSize: 11,
//               fontWeight: 700,
//               letterSpacing: "0.06em",
//             }}
//           >
//             ⚡ AI · LI-ION SAFETY
//           </div>
//           <h2
//             style={{
//               margin: "10px 0 4px",
//               fontSize: 22,
//               fontWeight: 800,
//               color: "#020617",
//             }}
//           >
//             AI-Driven Battery Temperature Prediction
//           </h2>
//           <p
//             style={{
//               margin: 0,
//               fontSize: 13,
//               color: "#6b7280",
//             }}
//           >
//             Enter cell parameters. The model estimates core temperature and
//             flags if it is within the safe operating range.
//           </p>
//         </div>

//         {/* Inputs grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
//             columnGap: 12,
//             rowGap: 10,
//           }}
//         >
//           {Object.keys(form).map((k) => (
//             <div key={k}>
//               <label
//                 style={{
//                   fontSize: 11.5,
//                   textTransform: "capitalize",
//                   color: "#6b7280",
//                   display: "block",
//                   marginBottom: 2,
//                 }}
//               >
//                 {k.replace("_", " ")}
//               </label>
//               <input
//                 type="number"
//                 step="any"
//                 name={k}
//                 value={form[k]}
//                 onChange={handle}
//                 placeholder={k}
//                 style={{
//                   width: "100%",
//                   padding: "8px 9px",
//                   borderRadius: 8,
//                   border: "1px solid #e5e7eb",
//                   fontSize: 13,
//                   backgroundColor: "#f9fafb",
//                   boxSizing: "border-box",
//                   outline: "none",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <button
//           onClick={predict}
//           disabled={loading}
//           style={{
//             width: "100%",
//             marginTop: 18,
//             padding: 11,
//             borderRadius: 999,
//             border: "none",
//             background: loading
//               ? "linear-gradient(90deg,#60a5fa,#34d399)"
//               : "linear-gradient(90deg,#2563eb,#22c55e)",
//             color: "white",
//             fontWeight: 700,
//             fontSize: 14,
//             cursor: loading ? "wait" : "pointer",
//             boxShadow: "0 12px 26px rgba(37,99,235,0.5)",
//             transition: "transform 0.18s ease, box-shadow 0.18s ease",
//           }}
//           onMouseEnter={(e) => {
//             if (!loading) {
//               e.currentTarget.style.transform = "translateY(-1px)";
//               e.currentTarget.style.boxShadow =
//                 "0 15px 34px rgba(34,197,94,0.5)";
//             }
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow =
//               "0 12px 26px rgba(37,99,235,0.5)";
//           }}
//         >
//           {loading ? "Predicting…" : "Predict Temperature"}
//         </button>

//         {err && (
//           <div
//             style={{
//               marginTop: 12,
//               padding: 10,
//               borderRadius: 10,
//               background: "#fee2e2",
//               color: "#991b1b",
//               fontSize: 12.5,
//               border: "1px solid #fecaca",
//             }}
//           >
//             {err}
//           </div>
//         )}
//       </div>

//       {/* RIGHT SIDE – OUTPUT / ANIMATION */}
//       <div
//         style={{
//           flex: 1,
//           borderRadius: 18,
//           border: "1px solid rgba(148,163,184,0.4)",
//           background:
//             "radial-gradient(circle at top, rgba(15,23,42,0.9), rgba(6,78,59,0.95))",
//           boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
//           padding: 20,
//           boxSizing: "border-box",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* If no result yet: show battery animation */}
//         {!res && (
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 width: 220,
//                 height: 110,
//                 margin: "0 auto 16px",
//                 position: "relative",
//               }}
//             >
//               {/* Battery body */}
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: 18,
//                   border: "3px solid #9ca3af",
//                   boxSizing: "border-box",
//                   overflow: "hidden",
//                   background:
//                     "linear-gradient(to right,#020617,#111827,#020617)",
//                 }}
//               >
//                 {/* animated fill */}
//                 <div
//                   className="battery-fill"
//                   style={{
//                     height: "100%",
//                     background:
//                       "linear-gradient(90deg,#22c55e,#a3e635,#16a34a)",
//                     width: "60%",
//                     animation: "batteryCharge 1.4s ease-in-out infinite",
//                     boxShadow: "0 0 18px rgba(34,197,94,0.7)",
//                   }}
//                 ></div>
//               </div>
//               {/* battery cap */}
//               <div
//                 style={{
//                   position: "absolute",
//                   right: -14,
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   width: 12,
//                   height: 32,
//                   borderRadius: 6,
//                   background: "#9ca3af",
//                 }}
//               ></div>
//             </div>
//             <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
//               Model Ready
//             </h3>
//             <p style={{ marginTop: 6, fontSize: 13, color: "#e5e7eb" }}>
//               Waiting for input parameters to estimate Li-ion cell temperature.
//             </p>
//             <p
//               style={{
//                 marginTop: 4,
//                 fontSize: 12,
//                 color: "#9ca3af",
//               }}
//             >
//               The right panel will display predicted temperature and safety
//               status once you hit <strong>Predict</strong>.
//             </p>
//           </div>
//         )}

//         {/* If we have a result: show output card */}
//         {res && (
//           <div
//             style={{
//               maxWidth: 420,
//               width: "100%",
//               background: statusColor,
//               borderRadius: 18,
//               padding: 20,
//               boxSizing: "border-box",
//               boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
//               color: statusTextColor,
//             }}
//           >
//             <h3
//               style={{
//                 margin: 0,
//                 fontSize: 20,
//                 fontWeight: 800,
//                 color: "#020617",
//               }}
//             >
//               Predicted Temperature
//             </h3>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "baseline",
//                 marginTop: 10,
//               }}
//             >
//               <div>
//                 <div style={{ fontSize: 32, fontWeight: 800 }}>
//                   {typeof tempValue === "number"
//                     ? tempValue.toFixed(2)
//                     : tempValue}{" "}
//                   °C
//                 </div>
//                 <div
//                   style={{
//                     marginTop: 4,
//                     fontSize: 12,
//                     color: "#4b5563",
//                   }}
//                 >
//                   Threshold: 45 °C
//                 </div>
//               </div>
//               <span
//                 style={{
//                   padding: "6px 14px",
//                   borderRadius: 999,
//                   background: "white",
//                   fontSize: 12,
//                   fontWeight: 700,
//                   letterSpacing: "0.06em",
//                 }}
//               >
//                 {res.status}
//               </span>
//             </div>

//             <p
//               style={{
//                 marginTop: 12,
//                 fontSize: 14,
//                 fontWeight: 600,
//               }}
//             >
//               {res.message}
//             </p>

//             {/* Little bar showing how close to threshold */}
//             {typeof tempValue === "number" && (
//               <div style={{ marginTop: 14 }}>
//                 <div
//                   style={{
//                     height: 10,
//                     borderRadius: 999,
//                     background: "#e5e7eb",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     style={{
//                       height: "100%",
//                       width: `${Math.min((tempValue / 45) * 100, 100)}%`,
//                       background:
//                         tempValue > 45
//                           ? "linear-gradient(90deg,#ef4444,#b91c1c)"
//                           : "linear-gradient(90deg,#22c55e,#16a34a)",
//                       transition: "width 0.4s ease",
//                     }}
//                   ></div>
//                 </div>
//                 <div
//                   style={{
//                     fontSize: 11,
//                     color: "#374151",
//                     marginTop: 4,
//                   }}
//                 >
//                   0 °C{" "}
//                   <span style={{ float: "right" }}>45 °C (safe limit)</span>
//                 </div>
//               </div>
//             )}

//             <p
//               style={{
//                 marginTop: 14,
//                 fontSize: 11.5,
//                 color: "#374151",
//               }}
//             >
//               Temperature is estimated by a Random Forest regression model
//               trained on synthetic Li-ion battery behaviour (voltage, current,
//               SOC, capacity, internal resistance, cycle, and time step).
//             </p>
//           </div>
//         )}

//         {/* keyframes for battery animation */}
//         <style>{`
//           @keyframes batteryCharge {
//             0% { width: 20%; }
//             50% { width: 80%; }
//             100% { width: 20%; }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [form, setForm] = useState({
//     voltage: "",
//     current: "",
//     soc: "",
//     capacity: "",
//     internal_resistance: "",
//     cycle: "",
//     time_step: "",
//   });

//   const [res, setRes] = useState(null);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const predict = async () => {
//     try {
//       setErr("");
//       setRes(null);
//       setLoading(true);
//       const r = await axios.post("http://127.0.0.1:8000/predict", form);
//       setRes(r.data);
//     } catch {
//       setErr("Prediction failed ❌  (Is backend running on port 8000?)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const tempValue = res && (res.temperature ?? res.predicted_temperature);

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         background: "radial-gradient(circle at center, #0f172a, #064e3b)",
//         overflow: "hidden",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box"
//       }}
//     >
//       {/* LEFT PANEL (50%) */}
//       <div
//         style={{
//           width: "50%",
//           background: "rgba(255,255,255,0.95)",
//           padding: 32,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           boxSizing: "border-box"
//         }}
//       >
//         <h2 style={{ color: "#111827", fontWeight: 800, fontSize: 24, marginBottom: 20 }}>
//           AI-Driven Battery Temperature Prediction
//         </h2>

//         {/* FORM GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 14,
//             width: "100%",
//             maxWidth: 420
//           }}
//         >
//           {Object.keys(form).map((k) => (
//             <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <label style={{fontSize:12, fontWeight:600, color:"#374151", textTransform:"capitalize"}}>
//                 {k.replace("_", " ")}
//               </label>
//               <input
//                 type="number"
//                 step="any"
//                 name={k}
//                 value={form[k]}
//                 onChange={handle}
//                 placeholder={`Enter ${k}`}
//                 style={{
//                   padding: 10,
//                   borderRadius: 8,
//                   border: "1.4px solid #cbd5e1",
//                   fontSize: 14,
//                   backgroundColor: "#f9fafb",
//                   outline: "none"
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* PREDICT BUTTON */}
//         <button
//           onClick={predict}
//           disabled={loading}
//           style={{
//             width: "100%",
//             maxWidth: 420,
//             marginTop: 24,
//             padding: 13,
//             borderRadius: 40,
//             border: "none",
//             background: "#1d4ed8",
//             color: "white",
//             fontWeight: 700,
//             fontSize: 15,
//             cursor: "pointer",
//             boxShadow: "0 8px 24px rgba(29,78,216,0.4)"
//           }}
//         >
//           {loading ? "Processing..." : "Predict Temperature"}
//         </button>

//         {/* ERROR ALERT */}
//         {err && (
//           <div
//             style={{
//               width: "100%",
//               maxWidth: 380,
//               marginTop: 14,
//               padding: 12,
//               borderRadius: 10,
//               background: "#fecaca",
//               color: "#7f1d1d",
//               fontSize: 13,
//               fontWeight: 600,
//               textAlign: "center"
//             }}
//           >
//             {err}
//           </div>
//         )}
//       </div>

//       {/* RIGHT PANEL (50%) */}
//       <div
//         style={{
//           width: "50%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 32,
//           boxSizing: "border-box",
//           position: "relative"
//         }}
//       >
//         {/* BEFORE PREDICTION → ANIMATION */}
//         {!res && (
//           <div style={{textAlign:"center", animation:"fadeIn 0.5s"}}>
//             <div style={{width:260, margin:"0 auto 18px"}}>
//               <div
//                 style={{
//                   width: "100%",
//                   height: 120,
//                   borderRadius: 16,
//                   border: "4px solid rgba(229,231,235,0.8)",
//                   background:"#020617",
//                   overflow:"hidden",
//                   position:"relative",
//                   boxSizing:"border-box"
//                 }}
//               >
//                 <div
//                   style={{
//                     height:"100%",
//                     width:"50%",
//                     animation:"battery 1.5s infinite alternate ease-in-out",
//                     boxShadow:"0 0 18px rgba(34,197,94,0.6)"
//                   }}
//                 />
//               </div>
//             </div>
//             <h3 style={{fontSize:20, fontWeight:800, color:"white", margin:0}}>Model Standing By...</h3>
//             <p style={{fontSize:13, opacity:0.8, color:"#94a3b8", marginTop:6}}>
//               ML model ready to analyze incoming battery cell parameters 🔋⚡
//             </p>
//           </div>
//         )}

//         {/* AFTER PREDICTION → RESULT CARD */}
//         {res && (
//           <div
//             style={{
//               width: "100%",
//               maxWidth: 420,
//               background: "rgba(167,243,208,0.9)",
//               color: "#065f46",
//               borderRadius: 16,
//               padding: 22,
//               animation: "fadeIn 0.8s",
//               boxShadow:"0 10px 30px rgba(0,0,0,0.3)",
//               border:"2px solid rgba(16,185,129,0.6)",
//               boxSizing:"border-box"
//             }}
//           >
//             <h2 style={{fontSize:34, fontWeight:900, margin:0, textAlign:"center"}}>
//               {tempValue?.toFixed(2)} °C
//             </h2>
//             <h4 style={{textAlign:"center", marginTop:8, fontSize:14, fontWeight:700}}>
//               Status: {res.status === "WARNING" ? "⚠️ Overheated!" : "✅ Normal"}
//             </h4>
//             <p style={{textAlign:"center", fontSize:13, opacity:0.8}}>
//               {res.message}
//             </p>

//             {/* SAFETY THRESHOLD INFO */}
//             <div style={{marginTop:14, fontSize:12.5, textAlign:"center", background:"white", padding:6, borderRadius:999, width:"fit-content", margin:"16px auto 0"}}>
//               Safety Threshold: 45°C
//             </div>
//           </div>
//         )}

//         {/* KEYFRAMES */}
//         <style>{`
//           @keyframes battery {
//             0% { width: 30%; background: #16a34a; }
//             100% { width: 85%; background: #86efac; }
//           }
//           @keyframes fadeIn {
//             0% { opacity: 0; transform: translateY(10px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fadeIn {from{opacity:0}to{opacity:1}}
//           @keyframes fadeIn{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
//           @keyframes fadeIn{from{opacity:0}to{opacity:1}}
//           @keyframes fadeInOut{0%{opacity:0.4;transform:scale(0.98)}50%{opacity:1;transform:scale(1.02)}100%{opacity:0.4;transform:scale(0.98)}}
//           @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
//         `}</style>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [form, setForm] = useState({
//     voltage: "",
//     current: "",
//     soc: "",
//     capacity: "",
//     internal_resistance: "",
//     cycle: "",
//     time_step: "",
//   });

//   const [res, setRes] = useState(null);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const predict = async () => {
//     try {
//       setErr("");
//       setRes(null);
//       setLoading(true);
//       const r = await axios.post("http://127.0.0.1:8000/predict", form);
//       setRes(r.data);
//     } catch {
//       setErr("Prediction failed ❌  (Is backend running on port 8000?)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const tempValue = res && (res.temperature ?? res.predicted_temperature);
//   const isWarning = res?.status === "WARNING";

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         background: "radial-gradient(circle at center, #0f172a, #064e3b)",
//         overflow: "hidden",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* LEFT PANEL (50%) */}
//       <div
//         style={{
//           width: "50%",
//           background: "rgba(255,255,255,0.96)",
//           padding: 32,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           boxSizing: "border-box",
//         }}
//       >
//         <h2
//           style={{
//             color: "#111827",
//             fontWeight: 800,
//             fontSize: 26,
//             marginBottom: 8,
//           }}
//         >
//           AI-Driven Battery Temperature Prediction
//         </h2>
//         <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 24 }}>
//           Provide live cell parameters. The ML model will estimate the core
//           temperature and classify whether the pack is operating in a safe
//           thermal region.
//         </p>

//         {/* FORM GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 14,
//             width: "100%",
//             maxWidth: 430,
//           }}
//         >
//           {Object.keys(form).map((k) => (
//             <div
//               key={k}
//               style={{ display: "flex", flexDirection: "column", gap: 4 }}
//             >
//               <label
//                 style={{
//                   fontSize: 12,
//                   fontWeight: 600,
//                   color: "#374151",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {k.replace("_", " ")}
//               </label>
//               <input
//                 type="number"
//                 step="any"
//                 name={k}
//                 value={form[k]}
//                 onChange={handle}
//                 placeholder={`Enter ${k}`}
//                 style={{
//                   padding: 10,
//                   borderRadius: 8,
//                   border: "1.4px solid #cbd5e1",
//                   fontSize: 14,
//                   backgroundColor: "#f9fafb",
//                   outline: "none",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* PREDICT BUTTON */}
//         <button
//           onClick={predict}
//           disabled={loading}
//           style={{
//             width: "100%",
//             maxWidth: 430,
//             marginTop: 24,
//             padding: 13,
//             borderRadius: 40,
//             border: "none",
//             background: loading
//               ? "linear-gradient(90deg, #60a5fa, #34d399)"
//               : "linear-gradient(90deg, #2563eb, #059669)",
//             color: "white",
//             fontWeight: 700,
//             fontSize: 15,
//             cursor: loading ? "wait" : "pointer",
//             boxShadow: "0 8px 24px rgba(29,78,216,0.45)",
//           }}
//         >
//           {loading ? "Running AI model…" : "Predict Temperature"}
//         </button>

//         {/* ERROR ALERT */}
//         {err && (
//           <div
//             style={{
//               width: "100%",
//               maxWidth: 380,
//               marginTop: 14,
//               padding: 12,
//               borderRadius: 10,
//               background: "#fecaca",
//               color: "#7f1d1d",
//               fontSize: 13,
//               fontWeight: 600,
//               textAlign: "center",
//             }}
//           >
//             {err}
//           </div>
//         )}
//       </div>

//       {/* RIGHT PANEL (50%) */}
//       <div
//         style={{
//           width: "50%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 32,
//           boxSizing: "border-box",
//         }}
//       >
//         {/* BEFORE PREDICTION → “Model ready” message */}
//         {!res && (
//           <div
//             style={{
//               textAlign: "center",
//               color: "#e5e7eb",
//               maxWidth: 420,
//             }}
//           >
//             <div
//               style={{
//                 width: 260,
//                 margin: "0 auto 18px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: 120,
//                   borderRadius: 16,
//                   border: "4px solid rgba(229,231,235,0.8)",
//                   background: "#020617",
//                   overflow: "hidden",
//                   boxSizing: "border-box",
//                   position: "relative",
//                 }}
//               >
//                 <div
//                   style={{
//                     height: "100%",
//                     width: "40%",
//                     background:
//                       "linear-gradient(90deg, #22c55e, #a3e635, #16a34a)",
//                     animation: "battery 1.4s infinite alternate ease-in-out",
//                     boxShadow: "0 0 22px rgba(34,197,94,0.85)",
//                   }}
//                 />
//               </div>
//             </div>
//             <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
//               AI model is ready
//             </h3>
//             <p style={{ fontSize: 13, opacity: 0.9 }}>
//               Once you enter the parameters on the left and click{" "}
//               <strong>Predict Temperature</strong>, this panel will show a
//               detailed AI-generated assessment of the pack temperature.
//             </p>
//             <p style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
//               The model uses voltage, current, SOC, capacity, internal
//               resistance, cycle count and time step to estimate thermal
//               behaviour.
//             </p>
//           </div>
//         )}

//         {/* AFTER PREDICTION → RICH EXPLANATION CARD */}
//         {res && (
//           <div
//             style={{
//               width: "100%",
//               maxWidth: 460,
//               background: isWarning
//                 ? "rgba(254, 226, 226, 0.96)"
//                 : "rgba(209, 250, 229, 0.96)",
//               color: isWarning ? "#7f1d1d" : "#064e3b",
//               borderRadius: 18,
//               padding: 22,
//               boxSizing: "border-box",
//               boxShadow: "0 14px 32px rgba(0,0,0,0.35)",
//               border: isWarning
//                 ? "2px solid rgba(248,113,113,0.85)"
//                 : "2px solid rgba(16,185,129,0.85)",
//               animation: "fadeIn 0.5s ease",
//             }}
//           >
//             {/* Header */}
//             <div style={{ marginBottom: 8 }}>
//               <h3
//                 style={{
//                   margin: 0,
//                   fontSize: 18,
//                   fontWeight: 800,
//                   textTransform: "uppercase",
//                   letterSpacing: "0.06em",
//                 }}
//               >
//                 AI Temperature Assessment
//               </h3>
//               <p
//                 style={{
//                   margin: "6px 0 0",
//                   fontSize: 12.5,
//                   opacity: 0.8,
//                 }}
//               >
//                 Below is an automated analysis of the entered cell conditions
//                 using the trained Random Forest regression model.
//               </p>
//             </div>

//             {/* Main temperature + status */}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "baseline",
//                 marginTop: 8,
//               }}
//             >
//               <div>
//                 <div
//                   style={{
//                     fontSize: 32,
//                     fontWeight: 900,
//                     marginBottom: 4,
//                   }}
//                 >
//                   {typeof tempValue === "number"
//                     ? tempValue.toFixed(2)
//                     : tempValue}{" "}
//                   °C
//                 </div>
//                 <div
//                   style={{
//                     fontSize: 12,
//                     opacity: 0.8,
//                   }}
//                 >
//                   Estimated core temperature of the Li-ion cell.
//                 </div>
//               </div>
//               <div
//                 style={{
//                   padding: "6px 14px",
//                   borderRadius: 999,
//                   background: "white",
//                   fontSize: 12,
//                   fontWeight: 700,
//                   textTransform: "uppercase",
//                   letterSpacing: "0.06em",
//                 }}
//               >
//                 {isWarning ? "Warning" : "Normal"}
//               </div>
//             </div>

//             {/* Narrative explanation */}
//             <div style={{ marginTop: 14, fontSize: 13.2, lineHeight: 1.5 }}>
//               {!isWarning ? (
//                 <>
//                   <p style={{ margin: 0 }}>
//                     The predicted temperature is{" "}
//                     <strong>below the safety threshold of 36 °C</strong>. Based
//                     on the current operating conditions, the pack is considered
//                     to be in a{" "}
//                     <strong>thermally safe operating region</strong>.
//                   </p>
//                   <p style={{ marginTop: 8 }}>
//                     No immediate corrective action is required. However, it is
//                     recommended to continue monitoring the cell if current or
//                     internal resistance increase in future cycles.
//                   </p>
//                 </>
//               ) : (
//                 <>
//                   <p style={{ margin: 0 }}>
//                     The predicted temperature is{" "}
//                     <strong>above the safety threshold of 36 °C</strong>. This
//                     indicates that the pack is entering a{" "}
//                     <strong>high-risk thermal zone</strong>.
//                   </p>
//                   <p style={{ marginTop: 8 }}>
//                     Immediate mitigation is recommended: reduce load, improve
//                     cooling, or temporarily disconnect the cell to prevent
//                     accelerated degradation or thermal runaway.
//                   </p>
//                 </>
//               )}
//             </div>

//             {/* Threshold pill */}
//             <div
//               style={{
//                 marginTop: 14,
//                 fontSize: 12.5,
//                 textAlign: "center",
//               }}
//             >
//               <span
//                 style={{
//                   display: "inline-block",
//                   padding: "6px 14px",
//                   borderRadius: 999,
//                   background: "white",
//                   fontWeight: 600,
//                 }}
//               >
//                 Safety Threshold used by model: <strong>36 °C</strong>
//               </span>
//             </div>

//             {/* Model note */}
//             <p
//               style={{
//                 marginTop: 14,
//                 fontSize: 11.5,
//                 opacity: 0.8,
//               }}
//             >
//               This decision is generated by a data-driven model trained on
//               synthetic Li-ion battery data using features such as voltage,
//               current, state of charge, capacity, internal resistance, cycle
//               count and time step. The prediction is meant to assist engineers
//               and should be combined with hardware safety mechanisms.
//             </p>
//           </div>
//         )}

//         {/* KEYFRAMES */}
//         <style>{`
//           @keyframes battery {
//             0% { width: 30%; }
//             100% { width: 85%; }
//           }
//           @keyframes fadeIn {
//             0% { opacity: 0; transform: translateY(8px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [form, setForm] = useState({
//     voltage: "",
//     current: "",
//     soc: "",
//     capacity: "",
//     internal_resistance: "",
//     cycle: "",
//     time_step: "",
//   });

//   const [res, setRes] = useState(null);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const predict = async () => {
//     try {
//       setErr("");
//       setRes(null);
//       setLoading(true);
//       const r = await axios.post("http://127.0.0.1:8000/predict", form);
//       setRes(r.data);
//     } catch {
//       setErr("Prediction failed ❌  (All fields are required!!)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const tempValue = res && (res.temperature ?? res.predicted_temperature);
//   const isWarning = res?.status === "WARNING";

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         background: "radial-gradient(circle at center, #0f172a, #064e3b)",
//         overflow: "hidden",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* LEFT PANEL (50%) */}
//       <div
//         style={{
//           width: "50%",
//           // 🔵 changed: softer gradient + card feel instead of flat white
//           background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
//           padding: 32,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           boxSizing: "border-box",
//           boxShadow: "inset -8px 0 20px rgba(15,23,42,0.12)",
//           borderRight: "1px solid rgba(148,163,184,0.35)",
//         }}
//       >
//         <h2
//           style={{
//             // 🔵 slightly richer heading color
//             color: "#0f172a",
//             fontWeight: 800,
//             fontSize: 26,
//             marginBottom: 8,
//           }}
//         >
//           AI-Driven Battery Temperature Prediction
//         </h2>
//         <p
//           style={{
//             color: "#4b5563",
//             fontSize: 13,
//             marginBottom: 24,
//             maxWidth: 480,
//             textAlign: "center",
//           }}
//         >
//           Provide live cell parameters. The ML model will estimate the core
//           temperature and classify whether the pack is operating in a safe
//           thermal region.
//         </p>

//         {/* FORM GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 14,
//             width: "100%",
//             maxWidth: 430,
//           }}
//         >
//           {Object.keys(form).map((k) => (
//             <div
//               key={k}
//               style={{ display: "flex", flexDirection: "column", gap: 4 }}
//             >
//               <label
//                 style={{
//                   fontSize: 12,
//                   fontWeight: 600,
//                   color: "#1f2937",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {k.replace("_", " ")}
//               </label>
//               <input
//                 type="number"
//                 step="any"
//                 name={k}
//                 value={form[k]}
//                 onChange={handle}
//                 placeholder={`Enter ${k}`}
//                 style={{
//                   padding: 10,
//                   borderRadius: 8,
//                   // 🔵 cleaner input card look
//                   border: "1.4px solid #cbd5e1",
//                   fontSize: 14,
//                   backgroundColor: "#ffffff",
//                   outline: "none",
//                   boxShadow: "0 1px 2px rgba(148,163,184,0.35)",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* PREDICT BUTTON */}
//         <button
//           onClick={predict}
//           disabled={loading}
//           style={{
//             width: "100%",
//             maxWidth: 430,
//             marginTop: 24,
//             padding: 13,
//             borderRadius: 40,
//             border: "none",
//             // 🔵 kept gradient but tuned to match LHS palette
//             background: loading
//               ? "linear-gradient(90deg, #93c5fd, #6ee7b7)"
//               : "linear-gradient(90deg, #2563eb, #059669)",
//             color: "white",
//             fontWeight: 700,
//             fontSize: 15,
//             cursor: loading ? "wait" : "pointer",
//             boxShadow: "0 8px 24px rgba(37,99,235,0.4)",
//           }}
//         >
//           {loading ? "Running AI model…" : "Predict Temperature"}
//         </button>

//         {/* ERROR ALERT */}
//         {err && (
//           <div
//             style={{
//               width: "100%",
//               maxWidth: 380,
//               marginTop: 14,
//               padding: 12,
//               borderRadius: 10,
//               background: "#fecaca",
//               color: "#7f1d1d",
//               fontSize: 13,
//               fontWeight: 600,
//               textAlign: "center",
//               boxShadow: "0 4px 10px rgba(248,113,113,0.35)",
//             }}
//           >
//             {err}
//           </div>
//         )}
//       </div>

//       {/* RIGHT PANEL (50%) – unchanged */}
//       <div
//         style={{
//           width: "50%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 32,
//           boxSizing: "border-box",
//         }}
//       >
//         {/* BEFORE PREDICTION → “Model ready” message */}
//         {!res && (
//           <div
//             style={{
//               textAlign: "center",
//               color: "#e5e7eb",
//               maxWidth: 420,
//             }}
//           >
//             <div
//               style={{
//                 width: 260,
//                 margin: "0 auto 18px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: 120,
//                   borderRadius: 16,
//                   border: "4px solid rgba(229,231,235,0.8)",
//                   background: "#020617",
//                   overflow: "hidden",
//                   boxSizing: "border-box",
//                   position: "relative",
//                 }}
//               >
//                 <div
//                   style={{
//                     height: "100%",
//                     width: "40%",
//                     background:
//                       "linear-gradient(90deg, #22c55e, #a3e635, #16a34a)",
//                     animation: "battery 1.4s infinite alternate ease-in-out",
//                     boxShadow: "0 0 22px rgba(34,197,94,0.85)",
//                   }}
//                 />
//               </div>
//             </div>
//             <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
//               AI model is ready
//             </h3>
//             <p style={{ fontSize: 13, opacity: 0.9 }}>
//               Once you enter the parameters on the left and click{" "}
//               <strong>Predict Temperature</strong>, this panel will show a
//               detailed AI-generated assessment of the pack temperature.
//             </p>
//             <p style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
//               The model uses voltage, current, SOC, capacity, internal
//               resistance, cycle count and time step to estimate thermal
//               behaviour.
//             </p>
//           </div>
//         )}

//         {/* AFTER PREDICTION → RICH EXPLANATION CARD */}
//         {res && (
//           <div
//             style={{
//               width: "100%",
//               maxWidth: 460,
//               background: isWarning
//                 ? "rgba(254, 226, 226, 0.96)"
//                 : "rgba(209, 250, 229, 0.96)",
//               color: isWarning ? "#7f1d1d" : "#064e3b",
//               borderRadius: 18,
//               padding: 22,
//               boxSizing: "border-box",
//               boxShadow: "0 14px 32px rgba(0,0,0,0.35)",
//               border: isWarning
//                 ? "2px solid rgba(248,113,113,0.85)"
//                 : "2px solid rgba(16,185,129,0.85)",
//               animation: "fadeIn 0.5s ease",
//             }}
//           >
//             {/* Header */}
//             <div style={{ marginBottom: 8 }}>
//               <h3
//                 style={{
//                   margin: 0,
//                   fontSize: 18,
//                   fontWeight: 800,
//                   textTransform: "uppercase",
//                   letterSpacing: "0.06em",
//                 }}
//               >
//                 AI Temperature Assessment
//               </h3>
//               <p
//                 style={{
//                   margin: "6px 0 0",
//                   fontSize: 12.5,
//                   opacity: 0.8,
//                 }}
//               >
//                 Below is an automated analysis of the entered cell conditions
//                 using the trained Random Forest regression model.
//               </p>
//             </div>

//             {/* Main temperature + status */}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "baseline",
//                 marginTop: 8,
//               }}
//             >
//               <div>
//                 <div
//                   style={{
//                     fontSize: 32,
//                     fontWeight: 900,
//                     marginBottom: 4,
//                   }}
//                 >
//                   {typeof tempValue === "number"
//                     ? tempValue.toFixed(2)
//                     : tempValue}{" "}
//                   °C
//                 </div>
//                 <div
//                   style={{
//                     fontSize: 12,
//                     opacity: 0.8,
//                   }}
//                 >
//                   Estimated core temperature of the Li-ion cell.
//                 </div>
//               </div>
//               <div
//                 style={{
//                   padding: "6px 14px",
//                   borderRadius: 999,
//                   background: "white",
//                   fontSize: 12,
//                   fontWeight: 700,
//                   textTransform: "uppercase",
//                   letterSpacing: "0.06em",
//                 }}
//               >
//                 {isWarning ? "Warning" : "Normal"}
//               </div>
//             </div>

//             {/* Narrative explanation */}
//             <div style={{ marginTop: 14, fontSize: 13.2, lineHeight: 1.5 }}>
//               {!isWarning ? (
//                 <>
//                   <p style={{ margin: 0 }}>
//                     The predicted temperature is{" "}
//                     <strong>below the safety threshold of 36 °C</strong>. Based
//                     on the current operating conditions, the pack is considered
//                     to be in a{" "}
//                     <strong>thermally safe operating region</strong>.
//                   </p>
//                   <p style={{ marginTop: 8 }}>
//                     No immediate corrective action is required. However, it is
//                     recommended to continue monitoring the cell if current or
//                     internal resistance increase in future cycles.
//                   </p>
//                 </>
//               ) : (
//                 <>
//                   <p style={{ margin: 0 }}>
//                     The predicted temperature is{" "}
//                     <strong>above the safety threshold of 36 °C</strong>. This
//                     indicates that the pack is entering a{" "}
//                     <strong>high-risk thermal zone</strong>.
//                   </p>
//                   <p style={{ marginTop: 8 }}>
//                     Immediate mitigation is recommended: reduce load, improve
//                     cooling, or temporarily disconnect the cell to prevent
//                     accelerated degradation or thermal runaway.
//                   </p>
//                 </>
//               )}
//             </div>

//             {/* Threshold pill */}
//             <div
//               style={{
//                 marginTop: 14,
//                 fontSize: 12.5,
//                 textAlign: "center",
//               }}
//             >
//               <span
//                 style={{
//                   display: "inline-block",
//                   padding: "6px 14px",
//                   borderRadius: 999,
//                   background: "white",
//                   fontWeight: 600,
//                 }}
//               >
//                 Safety Threshold used by model: <strong>36 °C</strong>
//               </span>
//             </div>

//             {/* Model note */}
//             <p
//               style={{
//                 marginTop: 14,
//                 fontSize: 11.5,
//                 opacity: 0.8,
//               }}
//             >
//               This decision is generated by a data-driven model trained on
//               synthetic Li-ion battery data using features such as voltage,
//               current, state of charge, capacity, internal resistance, cycle
//               count and time step. The prediction is meant to assist engineers
//               and should be combined with hardware safety mechanisms.
//             </p>
//           </div>
//         )}

//         {/* KEYFRAMES */}
//         <style>{`
//           @keyframes battery {
//             0% { width: 30%; }
//             100% { width: 85%; }
//           }
//           @keyframes fadeIn {
//             0% { opacity: 0; transform: translateY(8px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [form, setForm] = useState({
    voltage: "",
    current: "",
    soc: "",
    capacity: "",
    internal_resistance: "",
    cycle: "",
    time_step: "",
  });

  const [res, setRes] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const predict = async () => {
    try {
      setErr("");
      setRes(null);
      setLoading(true);
      const r = await axios.post("http://127.0.0.1:8000/predict", form);
      setRes(r.data);
    } catch {
      setErr("Prediction failed ❌  (All fields are required!!)");
    } finally {
      setLoading(false);
    }
  };

  const tempValue = res && (res.temperature ?? res.predicted_temperature);
  const isWarning = res?.status === "WARNING";

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        background: "radial-gradient(circle at center, #0f172a, #064e3b)",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      {/* LEFT PANEL (50%) */}
      <div
        style={{
          width: "50%",
          // 🔵 changed: nicer soft gradient instead of flat white
          background: "linear-gradient(135deg, #f9faff, #e0f2ff)",
          padding: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          borderRight: "1px solid #e5e7eb",
          boxShadow: "4px 0 18px rgba(15,23,42,0.25)",
        }}
      >
        <h2
          style={{
            color: "#0f172a",
            fontWeight: 800,
            fontSize: 26,
            marginBottom: 8,
          }}
        >
          AI-Driven Battery Temperature Prediction
        </h2>
        <p style={{ color: "#4b5563", fontSize: 13, marginBottom: 24 }}>
          Provide live cell parameters. The ML model will estimate the core
          temperature and classify whether the pack is operating in a safe
          thermal region.
        </p>

        {/* FORM GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            width: "100%",
            maxWidth: 430,
          }}
        >
          {Object.keys(form).map((k) => (
            <div
              key={k}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#374151",
                  textTransform: "capitalize",
                }}
              >
                {k.replace("_", " ")}
              </label>
              <input
                type="number"
                step="any"
                name={k}
                value={form[k]}
                onChange={handle}
                placeholder={`Enter ${k}`}
                style={{
                  padding: 10,
                  borderRadius: 8,
                  border: "1.4px solid #cbd5e1",
                  fontSize: 14,
                  // 🔵 slightly tinted input background
                  backgroundColor: "#eff6ff",
                  outline: "none",
                }}
              />
            </div>
          ))}
        </div>

        {/* PREDICT BUTTON */}
        <button
          onClick={predict}
          disabled={loading}
          style={{
            width: "100%",
            maxWidth: 430,
            marginTop: 24,
            padding: 13,
            borderRadius: 40,
            border: "none",
            background: loading
              ? "linear-gradient(90deg, #93c5fd, #6ee7b7)"
              : "linear-gradient(90deg, #2563eb, #059669)",
            color: "white",
            fontWeight: 700,
            fontSize: 15,
            cursor: loading ? "wait" : "pointer",
            boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
          }}
        >
          {loading ? "Running AI model…" : "Predict Temperature"}
        </button>

        {/* ERROR ALERT */}
        {err && (
          <div
            style={{
              width: "100%",
              maxWidth: 380,
              marginTop: 14,
              padding: 12,
              borderRadius: 10,
              background: "#fee2e2",
              color: "#7f1d1d",
              fontSize: 13,
              fontWeight: 600,
              textAlign: "center",
              border: "1px solid #fecaca",
            }}
          >
            {err}
          </div>
        )}
      </div>

      {/* RIGHT PANEL (50%) */}
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 32,
          boxSizing: "border-box",
        }}
      >
        {/* BEFORE PREDICTION → “Model ready” message */}
        {!res && (
          <div
            style={{
              textAlign: "center",
              color: "#e5e7eb",
              maxWidth: 420,
            }}
          >
            <div
              style={{
                width: 260,
                margin: "0 auto 18px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 16,
                  border: "4px solid rgba(229,231,235,0.8)",
                  background: "#020617",
                  overflow: "hidden",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "40%",
                    background:
                      "linear-gradient(90deg, #22c55e, #a3e635, #16a34a)",
                    animation: "battery 1.4s infinite alternate ease-in-out",
                    boxShadow: "0 0 22px rgba(34,197,94,0.85)",
                  }}
                />
              </div>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
              AI model is ready
            </h3>
            <p style={{ fontSize: 13, opacity: 0.9 }}>
              Once you enter the parameters on the left and click{" "}
              <strong>Predict Temperature</strong>, this panel will show a
              detailed AI-generated assessment of the pack temperature.
            </p>
            <p style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
              The model uses voltage, current, SOC, capacity, internal
              resistance, cycle count and time step to estimate thermal
              behaviour.
            </p>
          </div>
        )}

        {/* AFTER PREDICTION → RICH EXPLANATION CARD */}
        {res && (
          <div
            style={{
              width: "100%",
              maxWidth: 460,
              background: isWarning
                ? "rgba(254, 226, 226, 0.96)"
                : "rgba(209, 250, 229, 0.96)",
              color: isWarning ? "#7f1d1d" : "#064e3b",
              borderRadius: 18,
              padding: 22,
              boxSizing: "border-box",
              boxShadow: "0 14px 32px rgba(0,0,0,0.35)",
              border: isWarning
                ? "2px solid rgba(248,113,113,0.85)"
                : "2px solid rgba(16,185,129,0.85)",
              animation: "fadeIn 0.5s ease",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: 8 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                AI Temperature Assessment
              </h3>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: 12.5,
                  opacity: 0.8,
                }}
              >
                Below is an automated analysis of the entered cell conditions
                using the trained Random Forest regression model.
              </p>
            </div>

            {/* Main temperature + status */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: 8,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    marginBottom: 4,
                  }}
                >
                  {typeof tempValue === "number"
                    ? tempValue.toFixed(2)
                    : tempValue}{" "}
                  °C
                </div>
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.8,
                  }}
                >
                  Estimated core temperature of the Li-ion cell.
                </div>
              </div>
              <div
                style={{
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "white",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {isWarning ? "Warning" : "Normal"}
              </div>
            </div>

            {/* Narrative explanation */}
            <div style={{ marginTop: 14, fontSize: 13.2, lineHeight: 1.5 }}>
              {!isWarning ? (
                <>
                  <p style={{ margin: 0 }}>
                    The predicted temperature is{" "}
                    <strong>below the safety threshold of 36 °C</strong>. Based
                    on the current operating conditions, the pack is considered
                    to be in a{" "}
                    <strong>thermally safe operating region</strong>.
                  </p>
                  <p style={{ marginTop: 8 }}>
                    No immediate corrective action is required. However, it is
                    recommended to continue monitoring the cell if current or
                    internal resistance increase in future cycles.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ margin: 0 }}>
                    The predicted temperature is{" "}
                    <strong>above the safety threshold of 36 °C</strong>. This
                    indicates that the pack is entering a{" "}
                    <strong>high-risk thermal zone</strong>.
                  </p>
                  <p style={{ marginTop: 8 }}>
                    Immediate mitigation is recommended: reduce load, improve
                    cooling, or temporarily disconnect the cell to prevent
                    accelerated degradation or thermal runaway.
                  </p>
                </>
              )}
            </div>

            {/* Threshold pill */}
            <div
              style={{
                marginTop: 14,
                fontSize: 12.5,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "white",
                  fontWeight: 600,
                }}
              >
                Safety Threshold used by model: <strong>36 °C</strong>
              </span>
            </div>

            {/* Model note */}
            <p
              style={{
                marginTop: 14,
                fontSize: 11.5,
                opacity: 0.8,
              }}
            >
              This decision is generated by a data-driven model trained on
              synthetic Li-ion battery data using features such as voltage,
              current, state of charge, capacity, internal resistance, cycle
              count and time step. The prediction is meant to assist engineers
              and should be combined with hardware safety mechanisms.
            </p>
          </div>
        )}

        {/* KEYFRAMES */}
        <style>{`
          @keyframes battery {
            0% { width: 30%; }
            100% { width: 85%; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}
