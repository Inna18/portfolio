import "./Bottom.css"
import IconGithub from "../assets/icons/github.svg";
import IconEmail from "../assets/icons/email.svg";
import IconLightOn from "../assets/icons/lightbulb-solid.svg";
import IconLightOff from "../assets/icons/lightbulb-regular.svg";

export default function Bottom() {
  return (
    <div className="bottom">
      <div className="section-github">
        <img className="icon-github" src={IconGithub} alt="icon-github"/>
        <p>[github address here...]</p>
      </div>
      <div className="section-email">
        <img className="icon-email" src={IconEmail} alt="icon-email"/>
        <p>[email here]</p>
      </div>

      <div className="section-theme">
        <img className="icon-theme" src={IconLightOn} alt="icon-moon"/>
        <img className="icon-theme" src={IconLightOff} alt="icon-sun"/>
      </div>
    </div>
  )
}
