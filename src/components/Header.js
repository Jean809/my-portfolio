import HeaderCSS from "./Header.module.css";

function Header() {
  return (
    <header className={HeaderCSS.mainContainer}>
      <h1 className={HeaderCSS.lastName}>Rosario</h1>
      <ul className={HeaderCSS.listContainer}>
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Projects</li>
        </a>
        <a href="">
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
}

export default Header;
