import { useState } from "react";
import "./App.css";
import Die from "./Die";
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

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
    //change state. need previous array of dice objects -> map through 2 c if id of die clicked matches die in array -> toggle isHeld. if not, keep die object (it wasnt clicked)
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const [dice, setDice] = useState(() => generateAllNewDice());

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
    if (!allSelectedKeyValuesSame(dice, ["value", "isHeld"])) {
      setDice((oldDice) => {
        return oldDice.map((die) => {
          return die.isHeld
            ? { ...die }
            : { ...die, value: Math.floor(Math.random() * 6 + 1) };
        });
      });
    } else {
      setDice(generateAllNewDice());
    }
  }

  // end of game logic (test)
  function allSelectedKeyValuesSame(arr, keysToCheck) {
    if (arr.length === 0) return true;

    return arr.every((obj) =>
      keysToCheck.every((key) => obj[key] === arr[0][key])
    );
  }

  let newGameBtn;
  function gameWon(callback) {
    if (callback()) {
      console.log("Game Won!");
      newGameBtn = true;
    }
    return newGameBtn;
  }

  gameWon(() => allSelectedKeyValuesSame(dice, ["value", "isHeld"]));

  // confetti
  const { width, height } = useWindowSize();

  return (
    <>
      <main>
        {allSelectedKeyValuesSame(dice, ["value", "isHeld"]) && (
          <Confetti width={width} height={height} />
        )}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <div className="rollBtnContainer">
          <button className="rollBtn" onClick={roll}>
            {newGameBtn ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </>
  );
}
