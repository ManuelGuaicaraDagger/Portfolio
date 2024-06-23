function Footer() {
    return (
      <footer className="flex justify-center px-[200px] mt-[200px] mb-[30px]">
          <ul className="flex items-center w-full justify-center">
            <li className="mx-[20px]">
              <a href="#sobre-mi">Sobre mi</a>
            </li>
            <span>|</span>
            <li  className="mx-[20px]">
              <a href="#proyectos">Proyectos</a>
            </li>
            <span>|</span>
            <li className="mx-[20px]">
              <a href="#tecnologias">Tecnologías</a>
            </li>
          </ul>
      </footer>
    );
  }
  
  export default Footer;