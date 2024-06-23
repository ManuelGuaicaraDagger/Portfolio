function Header() {
    return (
      <header className="flex justify-between px-[200px] py-[28px] ">
        <nav className=" flex items-center">
            <ul className="flex items-center w-[400px] justify-between">
                <li className="underline-animation">Proyectos</li>
                <li className="underline-animation">Tecnologías</li>
                <li className="underline-animation">Sobre mi</li>
            </ul>
        </nav>
        <a className="w-[175px] h-[35px] rounded-[10px] flex justify-center items-center bg-pt-blue text-black" href="/">Contáctame</a>
      </header>
    )
  }
  
  export default Header
  