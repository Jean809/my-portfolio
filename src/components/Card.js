import CardCSS from "./Card.module.css";

function Card(props) {
  return (
    <div className={CardCSS.mainContainer}>
      <div className={CardCSS.cardContainer}>
        <h3 className={CardCSS.title}>{props.title}</h3>
        <img className={CardCSS.badge} src={props.badge1}></img>
        <img className={CardCSS.badge} src={props.badge2}></img>
        <img
          className={`${CardCSS.badge} ${CardCSS.thirdBadge}`}
          src={props.badge3}
        ></img>
        <p className={CardCSS.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
