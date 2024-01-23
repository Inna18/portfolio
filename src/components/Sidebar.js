import Title from "../pages/title/Title";
import Navbar from "./Navbar";
import Bottom from "./Bottom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Title />
        <Navbar />
      </div>
      <div className="sidebar-bottom">
        <Bottom />
      </div>
    </div>
  )
}
