function Footer() {
    return (
      <footer className="flex flex-col justify-center items-center px-[200px] mt-[200px] mb-[30px]">
          <ul className="flex items-center w-full justify-center border-b pb-[20px]">
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
          <span className="mt-[20px]">Copyright 2024 © Todos los derechos reservados</span>
      </footer>
    );
  }
  
  export default Footer;