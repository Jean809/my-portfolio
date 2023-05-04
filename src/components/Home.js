import HomeCSS from "./Home.module.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home">
      <div className={HomeCSS.mainContainer}>
        <div className={HomeCSS.introductionContainer}>
          <div className={HomeCSS.introduction}>
            <h1 className={HomeCSS.hello}>HELLO ━━━━━━━━━━━</h1>
            <h1 className={HomeCSS.myName}>I AM JEAN ROSARIO </h1>
            <h2 className={HomeCSS.myCareer}>Junior Web developer</h2>
            <button className={HomeCSS.cv}>GET CV</button>

            <Link to="projects" activeClass="active" spy={true} smooth={true}>
              <button className={HomeCSS.projectbtn}>PROJECTS</button>
            </Link>
          </div>
          <div className={HomeCSS.meContainer}>
            <img
              className={HomeCSS.me}
              src="images/my-character.png"
              alt="cartoon image of myself"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
