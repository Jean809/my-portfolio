import CardCSS from "./Card.module.css";

function Card() {
  return (
    <div className={CardCSS.mainContainer}>
      <h1 className={CardCSS.title}>PROJECTS</h1>
      <h3>first-project</h3>
    </div>
  );
}

export default Card;
