import "./Navbar.css";
import {useContext} from "react";
import {ScrollContext} from "../context/ScrollContext";

export default function Navbar() {
  const { changeScroll } = useContext(ScrollContext);

  return (
    <div className="navbar">
      <div>
        <a onClick={() => changeScroll("about")}>About</a>
      </div>
      <div>
        <a onClick={() => changeScroll("tools")}>Tools</a>
      </div>
      <div>
        <a onClick={() => changeScroll("projects")}>Projects</a>
      </div>
      <div>
        <a onClick={() => changeScroll("experience")}>Experience</a>
      </div>
      <div>
        <a onClick={() => changeScroll("contacts")}>Contact</a>
      </div>
    </div>
  )
}
