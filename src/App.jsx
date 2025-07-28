import { useState } from "react";
import "./App.css";
import Die from "./Die";
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

export default function App() {
  // function to generate 10 random dice
  function generateAllNewDice() {
    let allDice = [];
    for (let i = 0; i < 10; i++) {
      allDice.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      });
    }
    return allDice;
  }

  //hold function
  function hold(id) {
    console.log(id);
  }

  const [dice, setDice] = useState(generateAllNewDice());

  const diceElements = dice.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        isHeld={die.isHeld}
        hold={hold}
        id={die.id}
      />
    );
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
