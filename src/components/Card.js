import CardCSS from "./Card.module.css";

function Card(props) {
  return (
    <div className={CardCSS.mainContainer}>
      <a className={CardCSS.githubLink} href={props.githubLink}>
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
      </a>
    </div>
  );
}

export default Card;
