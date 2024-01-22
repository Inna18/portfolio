import "./Bottom.css"
import IconGithub from "../assets/icons/github.svg";
import IconEmail from "../assets/icons/email.svg";

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
    </div>
  )
}
