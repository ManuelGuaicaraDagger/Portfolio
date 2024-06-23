import './App.css'
import Contact from './component/contact/Contact.tsx'
import Header from './component/header/Header.tsx'
import Main from './component/main/Main.tsx'
import Projects from './component/projects/Projects.tsx'
import Technologies from './component/technologies/Technologies.tsx'

function App() {


  return (
    <>
     <Header/>
     <Main/>
     <Projects/>
     <Technologies />
     <Contact />
    </>
  )
}

export default App
