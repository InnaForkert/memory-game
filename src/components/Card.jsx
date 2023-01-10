import { CardDiv, Front, Back, Flipper } from "./Card.styled";
import useSound from 'use-sound';
import stepSound from '../sounds/step.wav';

export function Card({ data, handleChoice, flipped, disabled }) {
  const [playSound] = useSound(stepSound);

  function handleClick() {
    if (!disabled) {
      handleChoice(data);
      playSound();
    }
  }

  return (
    <CardDiv>
      <Flipper className={flipped ? "flipped" : ""}>
        <Front src={data.src} alt="card front" width="150" />
        <Back
          src="img/card.png"
          alt="card back"
          width="150"
          onClick={handleClick}
        />
      </Flipper>
    </CardDiv>
  );
}
