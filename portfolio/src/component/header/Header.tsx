import { useState } from 'react';
import hamburger from '../../assets/images/hamburger.png'
import close from '../../assets/images/close.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between px-[200px] py-[28px] bg-[#000] shadow-md max-[1100px]:px-[50px]">
      <nav className="flex items-center">
        <ul className="hidden md:flex items-center w-[400px] justify-between">
          <li className="underline-animation">
            <a href="#sobre-mi">Inicio</a>
          </li>
          <li className="underline-animation">
            <a href="#proyectos">Proyectos</a>
          </li>
          <li className="underline-animation">
            <a href="#tecnologias">Tecnologías</a>
          </li>
        </ul>
        <div className="md:hidden flex items-center">
          <img
            src={hamburger}
            alt="Menu"
            className="cursor-pointer h-[30px] w-auto"
            onClick={toggleMenu}
          />
        </div>
      </nav>
      <a
        className="w-[175px] h-[35px] rounded-[10px] flex justify-center items-center bg-pt-blue text-black max-[400px]:w-[90px] max-[400px]:text-sm"
        href="#contacto"
      >
        Contáctame
      </a>

      <div
        className={`fixed w-1/2 inset-0 z-40 bg-black bg-opacity-75 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={closeMenu}
      >
        <div
          className="flex flex-col items-start space-y-4 p-8 bg-[#000] h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={close} alt="Close" className='h-[10px] w-auto cursor-pointer' onClick={closeMenu}/>
          <a className="underline-animation" href="#sobre-mi" onClick={closeMenu}>
            Inicio
          </a>
          <a className="underline-animation" href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>
          <a className="underline-animation" href="#tecnologias" onClick={closeMenu}>
            Tecnologías
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
