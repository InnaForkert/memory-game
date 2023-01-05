import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "../img/flower1.png" },
  { src: "../img/flower2.png" },
  { src: "../img/flower3.png" },
  { src: "../img/flower4.png" },
  { src: "../img/flower5.png" },
  { src: "../img/flower6.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((el) => ({ ...el, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Flower Match</h1>
      <button onClick={shuffleCards}>Start game</button>
    </div>
  );
}

export default App;
