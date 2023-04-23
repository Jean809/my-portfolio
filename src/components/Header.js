import HeaderCSS from "./Header.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <header id="header" className={HeaderCSS.mainContainer}>
      <h1 className={HeaderCSS.lastName}>Rosario</h1>
      <ul className={HeaderCSS.listContainer}>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
}

export default Header;
