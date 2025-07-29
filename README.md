# 🎲 Tenzies Game – React Web App

**Tenzies** is a fast-paced, addictive dice game built with React. The goal is to roll until all **ten dice show the same number**. After each roll, you can **"hold"** any dice to keep their value and keep rolling the rest. When you get all ten to match — 🎉 **confetti!**

---

## 🚀 Features

- 🎯 Roll until all dice match
- ✋ Hold dice between rolls to lock their value
- 🔄 Reroll only the unheld dice
- 🎉 Confetti animation when you win
- 🔢 Dice data stored in structured objects
- ⚛️ Built with core React concepts:
  - Callback-based state updates
  - Centralized dice state stored in a single object array
  - Conditional rendering for win detection and UI changes

---

## 🧠 What I Learned

This project helped me level up my React skills, including:

- Structuring component data using objects instead of multiple state variables
- Updating complex state through **callback functions** (not `useEffect`)
- Monitoring and updating individual die values via object properties
- Mapping object data to reusable `<Die />` components
- Managing game state and user interaction logic clearly and efficiently
- Integrating third-party libraries like `react-confetti` and `react-use`

---

## 🛠 Tech Stack

- React & Vite
- CSS
- [`react-confetti`](https://www.npmjs.com/package/react-confetti)
- [`react-use`](https://www.npmjs.com/package/react-use) for window size tracking

---

## 📦 Installation

```bash
git clone https://github.com/christabel-j/tenzies
cd tenzies-react
npm install
npm run dev   # or npm start if using Create React App
```

---

## 🧩 How to Play

1. Click Roll to generate 10 random dice.
2. Click any die to hold it.
3. Continue rolling until all dice show the same number.
4. 🎉 Enjoy the celebration when you win!

---

## 🚧 Future Additions

- ⏱️ Timer options:
  - Let users choose a challenge mode: 30s, 1 minute, 2 minutes, etc.
  - Win before the timer runs out!
- 📊 Best times / scores tracking
- 🎮 Game pause functionality
- 🔊 Sound effects for rolls, holds, and winning
- 🌗 Optional dark mode

---

## 🙌 Acknowledgments

Built as a learning project during my React journey. Inspired by the original game idea from Scrimba's React course.

---

## 📄 License

MIT — free to use, modify, and share.
