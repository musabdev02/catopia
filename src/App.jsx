import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {

  return (
    <>
    <div className="container">
       <Header />
     </div>
       <Hero />
      <div className="container">
        <Navigation />
      </div>
    </>
  )
}

export default App
