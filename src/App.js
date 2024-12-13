import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Instructions from "./Instructions";
import "./App.css";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [historyInput, setHistoryInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setCurrentInput("");
      setHistoryInput("");
    } else if (value === "C") {
      setCurrentInput(currentInput.slice(0, -1));
    } else if (value === "=") {
      try {
        setHistoryInput(currentInput);
        setCurrentInput(eval(currentInput).toString());
      } catch {
        setCurrentInput("Error");
      }
    } else {
      setCurrentInput(currentInput + value);
    }
  };

  return (
    <Router>
      <div className="app">
        {}
        <div className="navbar">
          <Link to="/" className="nav-link">Calculator</Link>
          <Link to="/instructions" className="nav-link">Instructions</Link>
        </div>

        <Routes>
          {}
          <Route
            path="/"
            element={
              <div className="calculator">
                <div className="display">
                  <div className="history">{historyInput}</div>
                  <div className="result">{currentInput || "0"}</div>
                </div>
                <div className="buttons">
                  {["AC", "C", "sin", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((btn) => (
                    <button
                      key={btn}
                      className={btn === "=" ? "equal" : ""}
                      onClick={() => handleClick(btn)}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            }
          />
          {}
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;