import AboutCSS from "./About.module.css";
import { color, motion } from "framer-motion";
import { useEffect } from "react";

function About() {
	
	useEffect(() => {
		// Add the class to the body or a container when the component mounts
		document.body.classList.add('no-scroll');
	
		// Remove the class when the component unmounts
		return () => {
		  document.body.classList.remove('no-scroll');
		};
	  }, []);
	
	return (
		<div id="about">
			<div className={AboutCSS.mainContainer}>
				<div className={AboutCSS.particlesContainer}>
					<motion.img
						animate={{ y: [10, 20, 20, 10] }}
						transition={{ type: "tween", duration: 4, repeat: Infinity }}
						className={AboutCSS.orangeParticle1}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-60/my-portfolio-img/orange-bubble.png"
						width={40}
					/>
					<motion.img
						animate={{ x: [0, 20, 20, 0] }}
						transition={{ type: "tween", duration: 4, repeat: Infinity }}
						className={AboutCSS.orangeParticle2}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-60/my-portfolio-img/orange-bubble.png"
						width={40}
					/>
					<motion.img
						animate={{ x: [0, 20, 20, 0] }}
						transition={{ type: "tween", duration: 4, repeat: Infinity }}
						className={AboutCSS.orangeParticle3}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-60/my-portfolio-img/orange-bubble.png"
						width={40}
					/>

					<motion.img
						animate={{ y: [20, 0, 0, 20] }}
						transition={{ type: "tween", duration: 4, repeat: Infinity }}
						className={AboutCSS.orangeParticle4}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-60/my-portfolio-img/orange-bubble.png"
						width={40}
					/>

					<motion.img
						animate={{ y: [0, 20, 20, 0] }}
						transition={{ type: "tween", duration: 4, repeat: Infinity }}
						className={AboutCSS.purpleParticle1}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-60/my-portfolio-img/purple-bubble.png"
						width={40}
					/>

					<motion.img
						animate={{ x: [0, 20, 20, 0] }}
						transition={{ type: "tween", duration: 4, repeat: Infinity }}
						className={AboutCSS.purpleParticle2}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-60/my-portfolio-img/purple-bubble.png"
						width={40}
					/>

					<motion.img
						animate={{ x: [0, 20, 20, 0] }}
						transition={{ type: "tween", duration: 4, repeat: Infinity }}
						className={AboutCSS.purpleParticle3}
						src="https://ik.imagekit.io/o6xkxph96/JeanRosario/tr:w-60/my-portfolio-img/purple-bubble.png"
						width={40}
					/>
				</div>
				<div className={AboutCSS.topTextContainer}>
					<h3 className={AboutCSS.creativePerson}>I am a creative </h3>
					<h3 className={AboutCSS.problemSolver}>PROBLEM SOLVER</h3>
					<h3 className={AboutCSS.problemSolverbkg}>PROBLEM SOLVER</h3>
					<h3 className={AboutCSS.passion}>with a passion for programming.</h3>
				</div>
				<div>
					<img
						className={AboutCSS.pcIMG}
						src="https://ik.imagekit.io/o6xkxph96/my-portfolio-img/pc-img.png?updatedAt=1694483105952"
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
