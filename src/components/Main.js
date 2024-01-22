import About from "../pages/about/About";
import Tools from "../pages/tools/Tools";
import Projects from "../pages/projects/Projects";
import Experience from "../pages/experience/Experience";
import Contacts from "../pages/contacts/Contacts";
import {useContext, useEffect} from "react";
import {ScrollContext} from "../context/ScrollContext";

export default function Main() {
  const { menu } = useContext(ScrollContext);

  return (
    <div className="main">
      <About menu={menu} />
      <Tools menu={menu} />
      <Projects menu={menu} />
      <Experience menu={menu} />
      <Contacts menu={menu} />
    </div>
  )
}
