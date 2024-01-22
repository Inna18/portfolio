import Title from "../pages/title/Title";
import Navbar from "./Navbar";
import Bottom from "./Bottom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Title />
      <Navbar />
      <Bottom />
    </div>
  )
}
