import { useState } from "react";
import "./App.css";
import Die from "./Die";

export default function App() {
  // function to generate 10 random dice
  function generateAllNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 6 + 1));
    }
    return arr;
  }

  const [dice, setDice] = useState(generateAllNewDice());

  const diceElements = dice.map((die) => {
    return <Die value={die} />;
  });

  // dice roll function
  function roll() {
    setDice(generateAllNewDice());
  }

  return (
    <>
      <main>
        <div className="dice-container">{diceElements}</div>
        <div className="rollBtnContainer">
          <button className="rollBtn" onClick={roll}>
            Roll
          </button>
        </div>
      </main>
    </>
  );
}
