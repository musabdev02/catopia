import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [isDark, setIsDark] = useState(true);

  const changeMode = () => {
    setIsDark(!isDark)
    document.body.setAttribute("data-theme",  isDark ? "dark" : "light"); 
  };
  return (
    <>
    <div className="container">
       <Header modeF={changeMode} currentMode={isDark} />
     </div>
       <Hero />
      <div className="container">
        <Navigation />
      </div>
    </>
  )
}

export default App
