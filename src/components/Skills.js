import SkillsCSS from "./Skills.module.css";

function Skills() {
  return (
    <div className={SkillsCSS.mainContainer}>
      <h1 className={SkillsCSS.title}>My Toolbox</h1>
      <div className={SkillsCSS.imgContainer}>
        <div className={SkillsCSS.firstTwoIMG}>
          <img
            className={`${SkillsCSS.barIMG} ${SkillsCSS.jsSkills}`}
            src="images/js-skill.PNG"
          ></img>
          <img
            className={`${SkillsCSS.barIMG} ${SkillsCSS.reactSkills}`}
            src="images/react-skill.PNG"
          ></img>
        </div>
        <div className={SkillsCSS.lastTwoIMG}>
          <img
            className={`${SkillsCSS.barIMG} ${SkillsCSS.htmlSkills}`}
            src="images/html-skill.PNG"
          ></img>
          <img
            className={`${SkillsCSS.barIMG} ${SkillsCSS.uiSkills}`}
            src="images/ui-ux-skill.PNG"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
