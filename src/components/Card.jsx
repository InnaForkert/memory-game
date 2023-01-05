import { CardDiv, Front, Back, Flipper } from "./Card.styled";

export function Card({ data, handleChoice, flipped, disabled }) {
  function handleClick() {
    if (!disabled) {
      handleChoice(data);
    }
  }

  return (
    <CardDiv>
      <Flipper className={flipped ? "flipped" : ""}>
        <Front src={data.src} alt="card front" width="150" />
        <Back
          src="../img/card.png"
          alt="card back"
          width="150"
          onClick={handleClick}
        />
      </Flipper>
    </CardDiv>
  );
}
