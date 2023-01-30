import "./header.css";
import logo from "../img/logo.png";
import Items from "./navbar-items";

export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="navb-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links">
          <Items link={"/"} text={"Home"} />
          <Items link={"/about"} text={"About"} />
          <Items link={"#contact"} text={"Contact"} />
        </div>
      </div>
    </header>
  );
}
