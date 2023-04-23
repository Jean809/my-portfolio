import AboutCSS from "./About.module.css";

function About() {
  return (
    <div id="about">
      <div className={AboutCSS.mainContainer}>
        <div className={AboutCSS.aboutIMG}>
          <img src="/images/about-us.png"></img>
        </div>
        <div className={AboutCSS.introductionContainer}>
          <h1 className={AboutCSS.introTitle}>
            Allow <br /> me to introduce <br /> myself
          </h1>
          <p className={AboutCSS.paragraph}>
            I am a creative problem solver with a passion for programming.
            <br /> My expertise in various programming languages and
            technologies <br /> allows me to design and develop efficient
            software solutions.
          </p>
          <br />
          <br />
          <p className={AboutCSS.paragraph}>
            I am dedicated to delivering high-quality results and working
            collaboratively
            <br /> with teams to achieve success. My drive for continuous
            learning and
            <br /> innovation keeps me motivated to stay at the forefront of the
            industry.
          </p>
          <button className={AboutCSS.btn}>DOWNLOAD CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
