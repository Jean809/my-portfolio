import HomeCSS from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={HomeCSS.mainContainer}>
        <div className={HomeCSS.introductionContainer}>
          <div className={HomeCSS.introduction}>
            <h1 className={HomeCSS.hello}>HELLO ━━━━━━━━━━━</h1>
            <h1 className={HomeCSS.myName}>I AM JEAN ROSARIO </h1>
            <h2 className={HomeCSS.myCareer}>Junior Web developer</h2>
          </div>
          <div className={HomeCSS.meContainer}>
            <img
              className={HomeCSS.me}
              src="/images/my-character.PNG"
              alt="cartoon image of myself"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
