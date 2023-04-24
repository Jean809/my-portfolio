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
      <h1 className={HeaderCSS.lastName}>Rosario</h1>
      <ul className={HeaderCSS.listContainer}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick("home")}
          className={isActive === "home" ? `${HeaderCSS.active}` : ""}
        >
          <li>Home</li>
        </Link>
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
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick("contact")}
          className={isActive === "contact" ? `${HeaderCSS.active}` : ""}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
