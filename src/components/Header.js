import { useState } from "react";
import HeaderCSS from "./Header.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Header(props) {
	const [isActive, setIsActive] = useState("home");

	const handleLinkClick = (link) => {
		setIsActive(link);
	};

	return (
		<header id="header" className={HeaderCSS.mainContainer}>
			<ul className={HeaderCSS.listContainer}>
				<li></li>
				<Link
					to="about"
					smooth={true}
					duration={500}
					onClick={() => handleLinkClick("about")}
					className={isActive === "about" ? `${HeaderCSS.active}` : ""}
				>
					<li>About</li>
				</Link>
				<Link
					to="projects"
					smooth={true}
					duration={500}
					onClick={() => handleLinkClick("projects")}
					className={isActive === "projects" ? `${HeaderCSS.active}` : ""}
				>
					<li>Projects</li>
				</Link>
				<Link
					className={HeaderCSS.unavailable}
					/*to="contact"
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick("contact")}*/
					/*className={isActive === "contact" ? `${HeaderCSS.active}` : ""}*/
				>
					<li>Contact</li>
				</Link>
			</ul>
			<Link
				to="home"
				smooth={true}
				duration={500}
				onClick={() => handleLinkClick("home")}
				className={HeaderCSS.homeContainer}
			>
				<p className={HeaderCSS.homeText}>HOME</p>
				<img
					className={HeaderCSS.homeIcon}
					src="images/home-icon.png"
					height={60}
					width={100}
				/>
			</Link>
		</header>
	);
}

export default Header;
