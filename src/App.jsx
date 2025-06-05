import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </Layout>
  );
}

export default App;
