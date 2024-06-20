function Header() {
    return (
      <header className="flex justify-between px-[200px] py-[28px] ">
        <nav className=" flex items-center">
            <ul className="flex items-center">
                <li>Proyectos</li>
                <li className="mx-[80px]">Tecnologías</li>
                <li>Sobre mi</li>
            </ul>
        </nav>
        <a className="w-[175px] h-[35px] rounded-[10px] flex justify-center items-center bg-pt-blue text-black" href="/">Contáctame</a>
      </header>
    )
  }
  
  export default Header
  