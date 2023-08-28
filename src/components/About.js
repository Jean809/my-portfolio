import AboutCSS from "./About.module.css";

function About() {
	return (
		<div id="about">
			<div className={AboutCSS.mainContainer}>
				<div className={AboutCSS.topTextContainer}>
					<h3 className={AboutCSS.creativePerson}>I am a creative </h3>
					<h3 className={AboutCSS.problemSolver}>PROBLEM SOLVER</h3>
					<h3 className={AboutCSS.problemSolverbkg}>PROBLEM SOLVER</h3>
					<h3 className={AboutCSS.passion}>with a passion for programming.</h3>
				</div>
				<div>
					<img
						className={AboutCSS.pcIMG}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-300/my-portfolio-img/pc-img.png"
						width={230}
					/>
				</div>
				<div className={AboutCSS.lowerTextContainer}>
					<h3 className={AboutCSS.lowerText}>
						My expertise in various programming languages and technologies
						allows me to design and develop efficient software solutions
					</h3>
				</div>
			</div>
		</div>
	);
}

export default About;
