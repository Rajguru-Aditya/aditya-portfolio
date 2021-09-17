import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GetInTouch />
      <Home />
      <Skills />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
