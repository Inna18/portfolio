import "./styling/Menu.css";
import {useContext} from "react";
import {ScrollContext} from "../context/ScrollContext";

export default function Menu() {
  const { menu, changeScroll } = useContext(ScrollContext);

  return (
    <div className="menu">
      <div>
        <a onClick={() => changeScroll("about")}>
          {menu === "about" && (
            <>
              <span className="long-dash"></span>
              <span style={{color: "#E2E8F0"}}>About</span></>
          )}
          {menu !== "about" && (
            <>
              <span className="dash"></span>
              <span>About</span>
            </>
          )}
        </a>
      </div>
      <div>
        <a onClick={() => changeScroll("tools")}>
          {menu === "tools" && (
            <>
              <span className="long-dash"></span>
              <span style={{color: "#E2E8F0"}}>Tools</span></>
          )}
          {menu !== "tools" && (
            <>
              <span className="dash"></span>
              <span>Tools</span>
            </>
          )}
        </a>
      </div>
      <div>
        <a onClick={() => changeScroll("projects")}>
          {menu === "projects" && (
            <>
              <span className="long-dash"></span>
              <span style={{color: "#E2E8F0"}}>Projects</span></>
          )}
          {menu !== "projects" && (
            <>
              <span className="dash"></span>
              <span>Projects</span>
            </>
          )}
        </a>
      </div>
      <div>
        <a onClick={() => changeScroll("experience")}>
          {menu === "experience" && (
            <>
              <span className="long-dash"></span>
              <span style={{color: "#E2E8F0"}}>Experience</span></>
          )}
          {menu !== "experience" && (
            <>
              <span className="dash"></span>
              <span>Experience</span>
            </>
          )}
        </a>
      </div>
      <div>
        <a onClick={() => changeScroll("contacts")}>
          {menu === "contacts" && (
            <>
              <span className="long-dash"></span>
              <span style={{color: "#E2E8F0"}}>Contacts</span></>
          )}
          {menu !== "contacts" && (
            <>
              <span className="dash"></span>
              <span>Contacts</span>
            </>
          )}
        </a>
      </div>
    </div>
  )
}
