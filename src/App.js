import React, { useState, useEffect } from "react";
import "./App.css"; // Import CSS file

function App() {
  // Counter (Local Storage)
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    if (savedCount) setCount(Number(savedCount));
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", count);
  }, [count]);

  // Session Storage (Login form)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("email");
    const savedPassword = sessionStorage.getItem("password");
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleSave = () => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    alert("Saved in Session Storage ✅");
  };

  return (
    <div className="app-container">
      <h1 className="title">Local & Session Storage Demo</h1>

      {/* Counter Section */}
      <div className="card">
        <h2 className="card-title">Counter (Local Storage)</h2>
        <p className="counter-value">{count}</p>
        <div className="btn-group">
          <button onClick={() => setCount(count - 1)} className="btn btn-red">
            -
          </button>
          <button onClick={() => setCount(count + 1)} className="btn btn-green">
            +
          </button>
        </div>
      </div>

      {/* Session Storage Section */}
      <div className="card">
        <h2 className="card-title">Login Form (Session Storage)</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleSave} className="btn btn-purple">
          Save to Session Storage
        </button>
        <p className="note">(Values clear after closing/reopening tab 🔄)</p>
      </div>
    </div>
  );
}

export default App;
