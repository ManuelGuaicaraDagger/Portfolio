import Contact from "../component/contact/Contact";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Main from "../component/main/Main";
import Projects from "../component/projects/Projects";
import Technologies from "../component/technologies/Technologies";

function Home() {
    return (
      <>
        <Header />
        <Main />
        <Projects />
        <Technologies />
        <Contact />
        <Footer />
      </>
    );
  }
  
  export default Home;
  