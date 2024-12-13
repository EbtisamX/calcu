import React from "react";

function Instructions() {
  return (
    <div className="page-container">
      <h2>Instructions</h2>
      <p>Welcome to the calculator app! Here's how to use it:</p>
      <ul>
        <li>Click on the numbers or operators to build your expression.</li>
        <li>Press the "=" button to calculate the result.</li>
        <li>Use "AC" to clear the input, or use the backspace to remove the last entered character.</li>
        <li>All basic arithmetic operations (+, -, *, /) are supported.</li>
        <li>Use the decimal point (.) if necessary.</li>
        <li>If an invalid expression is entered, an error message will appear.</li>
      </ul>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
}

export default Instructions;