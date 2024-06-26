import './App.css'
import { Route, Routes } from "react-router-dom";
import Footer from './component/footer/Footer.tsx'
import Header from './component/header/Header.tsx'

import useSmoothScrollWithOffset from './helpers/scroll.ts'
import Home from './views/Home.tsx';
import Sih from './views/Sih.tsx';
import Pcv from './views/Pcv.tsx';
import Dg from './views/Dg.tsx';

function App() {
  const headerHeight = 92
  useSmoothScrollWithOffset(headerHeight);
  return (
    <>
     <Header/>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/SIH' element={<Sih />} />
     <Route path='/PCV' element={<Pcv />} />
     <Route path='/DG' element={<Dg />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
