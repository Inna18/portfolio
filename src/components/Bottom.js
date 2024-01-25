import "./styling/Bottom.css"
import IconGithubRegular from "../assets/icons/github.svg";
import IconGithubHover from "../assets/icons/github-hover.svg";
import IconEmailRegular from "../assets/icons/email.svg";
import IconEmailHover from "../assets/icons/email-hover.svg";
import IconLightOn from "../assets/icons/lightbulb-solid.svg";
import IconLightOnHover from "../assets/icons/lightbulb-solid-hover.svg";
import IconLightOff from "../assets/icons/lightbulb-regular.svg";
import {useContext, useState} from "react";
import {ThemeContext} from "../context/ThemeContext";

export default function Bottom() {

  const { changeTheme, theme } = useContext(ThemeContext);
  const [iconGithub, setIconGithub] = useState("");
  const [iconEmail, setIconEmail] = useState("");
  const [iconLightBulb, setIconLightBulb] = useState("");

  const toggleTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="bottom">
      <div className="bottom-upper">
        <a className="section-github"
           href="https://github.com/Inna18"
           target="_blank"
           onMouseEnter={() => setIconGithub("hover")}
           onMouseLeave={() => setIconGithub("")}>
          {iconGithub === "" && <img className="icon-github" src={IconGithubRegular} alt="icon-github"/>}
          {iconGithub === "hover" && <img className="icon-github" src={IconGithubHover} alt="icon-github"/>}
          <span>GitHub</span>
        </a>
        <a className="section-email"
           href="mailto:kinvdev21@gmail.com"
           onMouseEnter={() => setIconEmail("hover")} onMouseLeave={() => setIconEmail("")} >
          {iconEmail === "" && <img className="icon-email" src={IconEmailRegular} alt="icon-email"/>}
          {iconEmail === "hover" && <img className="icon-email" src={IconEmailHover} alt="icon-email"/>}
          <span>Email</span>
        </a>
      </div>

      <div className="section-theme">
        {theme === "dark" && ((
          iconLightBulb === "" &&
          <img className="icon-theme"
               src={IconLightOn} alt="icon-light-on"
               onClick={() => toggleTheme()}
               onMouseEnter={() => setIconLightBulb("hover")}
               onMouseLeave={() => setIconLightBulb("")} />
        ) || (
          iconLightBulb === "hover" &&
          <img className="icon-theme"
               src={IconLightOnHover} alt="icon-light-on"
               onClick={() => toggleTheme()}
               onMouseEnter={() => setIconLightBulb("hover")}
               onMouseLeave={() => setIconLightBulb("")} />
        ))}
        {theme === "light" && <img className="icon-theme" src={IconLightOff} alt="icon-light-off" onClick={() => toggleTheme()} />}
      </div>
    </div>
  )
}
