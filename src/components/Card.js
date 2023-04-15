import CardCSS from "./Card.module.css";

function Card() {
  return (
    <div className={CardCSS.mainContainer}>
      <div className={CardCSS.cardContainer}>
        <h3 className={CardCSS.title}>Guess-My-Number</h3>
        <img className={CardCSS.badge} src="images/badges/JavaScript.png"></img>
        <img className={CardCSS.badge} src="images/badges/HTML.png"></img>
        <img
          className={`${CardCSS.badge} ${CardCSS.thirdBadge}`}
          src="images/badges/CSS.png"
        ></img>
        <p className={CardCSS.paragraph}>
          A game with a scoring system that measures the highest score obtained
          as you are guessing the correct numbers.
        </p>
      </div>
    </div>
  );
}

export default Card;
