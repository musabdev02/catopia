import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [isDark, setIsDark] = useState(true);

  const savedTheme = localStorage.getItem("theme") || "light";
  const changeMode = () => {
    setIsDark(!isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  document.body.setAttribute("data-theme",  savedTheme);
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
