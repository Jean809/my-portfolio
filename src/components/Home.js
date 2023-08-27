import HomeCSS from "./Home.module.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
	return (
		<div id="home">
			<div className={HomeCSS.mainContainer}>
				{
					<div className={HomeCSS.particlesContainer}>
						<motion.img
							animate={{ x: [0, 20, 20, 0], y: [20, 0, 0, 20] }}
							transition={{ type: "tween", duration: 3, repeat: Infinity }}
							className={HomeCSS.orangeParticle1}
							src="images/orange-bubble.png"
							width={60}
						/>
						<motion.img
							animate={{ x: [20, 0, 0, 20], y: [0, 15, 15, 0] }}
							transition={{ type: "tween", duration: 4, repeat: Infinity }}
							className={HomeCSS.orangeParticle2}
							src="images/orange-bubble.png"
							width={60}
						/>

						<motion.img
							animate={{ x: [0, 20, 20, 0] }}
							transition={{ type: "tween", duration: 4, repeat: Infinity }}
							className={HomeCSS.orangeParticle3}
							src="images/orange-bubble.png"
							width={40}
						/>

						<motion.img
							animate={{ y: [0, 20, 20, 0] }}
							transition={{ type: "tween", duration: 3, repeat: Infinity }}
							className={HomeCSS.orangeParticle4}
							src="images/orange-bubble.png"
							width={60}
						/>
						<motion.img
							animate={{ y: [0, 20, 20, 0] }}
							transition={{ type: "tween", duration: 5, repeat: Infinity }}
							className={HomeCSS.orangeParticle5}
							src="images/orange-bubble.png"
							width={60}
						/>

						<motion.img
							animate={{ x: [0, 15, 15, 0] }}
							transition={{ type: "tween", duration: 3, repeat: Infinity }}
							className={HomeCSS.orangeParticle6}
							src="images/orange-bubble.png"
							width={40}
						/>

						<motion.img
							animate={{ y: [0, 20, 20, 0] }}
							transition={{ type: "tween", duration: 3, repeat: Infinity }}
							className={HomeCSS.purpleParticle1}
							src="/images/purple-bubble.png"
							width={40}
						/>
						<motion.img
							animate={{ x: [0, 15, 15, 0] }}
							transition={{ type: "tween", duration: 3, repeat: Infinity }}
							className={HomeCSS.purpleParticle2}
							src="/images/purple-bubble.png"
							width={40}
						/>

						<motion.img
							animate={{ x: [0, 20, 20, 0], y: [20, 0, 0, 20] }}
							transition={{ type: "tween", duration: 4, repeat: Infinity }}
							className={HomeCSS.purpleParticle3}
							src="/images/purple-bubble.png"
							width={80}
						/>

						<motion.img
							animate={{ x: [0, 20, 20, 0], y: [15, 0, 0, 15] }}
							transition={{ type: "tween", duration: 4, repeat: Infinity }}
							y
							className={HomeCSS.purpleParticle4}
							src="/images/purple-bubble.png"
							width={40}
						/>
					</div>
				}
				{
					<motion.img
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1, repeat: 5 }}
						className={HomeCSS.cartoonSelf}
						src="images/cartoon-self.PNG"
						height={300}
					/>
				}
				{
					<div className={HomeCSS.introduction}>
						<h1 className={HomeCSS.helloText}>HELLO</h1>
						<h1 className={HomeCSS.lastNameBKG}>ROSARIO</h1>
						<p className={HomeCSS.line}>─────────</p>
						<h3 className={HomeCSS.myName}>
							I AM JEAN<span className={HomeCSS.lastName}>ROSARIO</span>
						</h3>

						<h2 className={HomeCSS.career}>Junior Web Developer</h2>
						<p className={HomeCSS.getCV}>GET CV</p>
					</div>
				}
			</div>
		</div>
	);
}

export default Home;
