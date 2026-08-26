import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  const page = window.location.pathname.replace(/\/$/, "") || "/";

  return (
    <div>
      <Navbar />
      {page === "/about" ? (
        <About />
      ) : page === "/skills" ? (
        <Skills />
      ) : page === "/projects" ? (
        <Projects />
      ) : page === "/contact" ? (
        <Contact />
      ) : (
        <Hero />
      )}
    </div>
  );
}

export default App;