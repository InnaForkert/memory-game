import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

const cardImages = [
  { src: "memory-game/img/flower1.png", matched: false },
  { src: "memory-game/img/flower2.png", matched: false },
  { src: "memory-game/img/flower3.png", matched: false },
  { src: "memory-game/img/flower4.png", matched: false },
  { src: "memory-game/img/flower5.png", matched: false },
  { src: "memory-game/img/flower6.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (choiceTwo && choiceOne) {
      setDisabled(true);
      if (choiceTwo.src === choiceOne.src) {
        setCards((prevCards) => {
          return prevCards.map((el) => {
            if (el.src === choiceOne.src) {
              return { ...el, matched: true };
            }
            return el;
          });
        });
      } else {
      }
      setTimeout(() => makeATurn(), 500);
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  function makeATurn() {
    setChoiceTwo(null);
    setChoiceOne(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  }

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((el) => ({ ...el, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="App">
      <h1>Flower Match</h1>
      <button onClick={shuffleCards}>New game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            data={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card.matched || card === choiceOne || card === choiceTwo}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
