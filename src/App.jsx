import { } from "react";
import Layout from "./layout/Layout";
import About from "./secciones/About";
import Projects from "./secciones/Projects";
import Skills from "./secciones/Skills";
import Hero from "./secciones/Hero";




function App() {
  return (

    <>
      <Layout>
        <Hero />
        <Projects />
      </Layout>
    </>
    
  );
}

export default App;
