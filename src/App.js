import './App.css';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import {useEffect, useRef} from "react";


function App() {
  const mouseRef = useRef(null);

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
        .mouse-styling {
          width: 100%;
          height: 100%;
          background-attachment: fixed;
          background-image: radial-gradient(
            circle at var(--x, 100px) var(--y, 100px),
            #29204f 0,
            #110641 50%
          );
        }
      `}
      </style>
      <div className="App mouse-styling" ref={mouseRef}>
        <div className="container">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
