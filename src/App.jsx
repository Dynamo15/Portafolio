import Layout from "./layout/Layout";
import Hero from "./secciones/Hero";
import About from "./secciones/About";
import Skills from "./secciones/Skills";
import Projects from "./secciones/Projects";
import Contact from "./secciones/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Skills />
      
      <Contact />
    </Layout>
  );
}

export default App;