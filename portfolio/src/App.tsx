import './App.css'
import Contact from './component/contact/Contact.tsx'
import Footer from './component/footer/Footer.tsx'
import Header from './component/header/Header.tsx'
import Main from './component/main/Main.tsx'
import Projects from './component/projects/Projects.tsx'
import Technologies from './component/technologies/Technologies.tsx'
import useSmoothScrollWithOffset from './helpers/scroll.ts'

function App() {
  const headerHeight = 92
  useSmoothScrollWithOffset(headerHeight);
  return (
    <>
     <Header/>
     <Main/>
     <Projects/>
     <Technologies />
     <Contact />
     <Footer/>
    </>
  )
}

export default App
