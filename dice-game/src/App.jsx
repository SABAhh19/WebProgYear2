import { useState } from "react";

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function App() {
  const [selectedEmg, setSelectedEmg] = useState("roll");

  function rollDice() {
    const random = Math.floor(Math.random() * 6);
    console.log(random);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "120px" }}>{}</div>
      <p>You rolled: {faces[rollDice()]}</p>
      <button>Roll 🎲</button>
    </div>
  );
}
