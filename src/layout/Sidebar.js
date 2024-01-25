import Title from "../components/Title";
import Menu from "../components/Menu";
import Bottom from "../components/Bottom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Title />
        <Menu />
      </div>
      <div className="sidebar-bottom">
        <Bottom />
      </div>
    </div>
  )
}
