import HomeCSS from "./Home.module.css";
import { Link } from "react-scroll";

function Home() {
	return (
		<div id="home">
			<div className={HomeCSS.mainContainer}>
				<div className={HomeCSS.particlesContainer}>
					<img
						className={HomeCSS.orangeParticle1}
						src="images/orange-bubble.png"
						width={60}
					/>
					<img
						className={HomeCSS.orangeParticle2}
						src="images/orange-bubble.png"
						width={60}
					/>

					<img
						className={HomeCSS.orangeParticle3}
						src="images/orange-bubble.png"
						width={40}
					/>

					<img
						className={HomeCSS.purpleParticle1}
						src="/images/purple-bubble.png"
						width={40}
					/>
					<img
						className={HomeCSS.purpleParticle2}
						src="/images/purple-bubble.png"
						width={40}
					/>

					<img
						className={HomeCSS.purpleParticle3}
						src="/images/purple-bubble.png"
						width={80}
					/>
				</div>
				<img
					className={HomeCSS.cartoonSelf}
					src="images/cartoon-self.PNG"
					height={340}
				/>
				<div className={HomeCSS.introduction}>
					<h1 className={HomeCSS.helloText}>HELLO</h1>
					<h1 className={HomeCSS.lastNameBKG}>ROSARIO</h1>
					<p className={HomeCSS.line}>─────────</p>
					<h3 className={HomeCSS.myName}>I AM JEAN</h3>
					<h3 className={HomeCSS.lastName}>ROSARIO</h3>
					<h2 className={HomeCSS.career}>Junior Web Developer</h2>
					<p className={HomeCSS.getCV}>GET CV</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
