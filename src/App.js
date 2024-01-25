import './App.css';
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
import {useContext, useEffect, useRef} from "react";
import {ThemeContext} from "./context/ThemeContext";


function App() {
  const mouseRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const updateMousePosition = (mouseEvent) => {
      const { clientX, clientY } = mouseEvent;
      mouseRef.current.style.setProperty("--x", `${clientX}px`);
      mouseRef.current.style.setProperty("--y", `${clientY}px`);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.addEventListener("mousemove", updateMousePosition);
    }
  }, []);

  return (
    <>
      <style jsx="true">{`
        .styling-dark {
          width: 100%;
          height: 100%;
          color: #94A3B8;
          background-attachment: fixed;
          background-image: radial-gradient(
            circle at var(--x, 100px) var(--y, 100px),
            #392e66 0,
            #110641 50%
          );
        }
        .styling-light {
          width: 100%;
          height: 100%;
          color: #000;
          background-attachment: fixed;
          background-image: radial-gradient(
                  circle at var(--x, 100px) var(--y, 100px),
                  gray 0,
                  #fff 50%
          );
        }
      `}
      </style>
      <div className={"App " + (theme==="dark" ? "styling-dark" : "styling-light") } ref={mouseRef}>
        <div className="container">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
