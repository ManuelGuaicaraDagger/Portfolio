import Contact from "../component/contact/Contact";
import Main from "../component/main/Main";
import Projects from "../component/projects/Projects";
import Technologies from "../component/technologies/Technologies";

function Home() {
    return (
      <>
        <Main />
        <Projects />
        <Technologies />
        <Contact />
      </>
    );
  }
  
  export default Home;
  