import AboutCSS from "./About.module.css";

function About() {
	return (
		<div id="about">
			<div className={AboutCSS.mainContainer}>
				<div className={AboutCSS.topTextContainer}>
					<h3>I am a creative </h3>
				</div>
			</div>
		</div>
	);
}

export default About;
