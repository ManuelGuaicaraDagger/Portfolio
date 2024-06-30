function BackHeader () {
    return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between px-[200px] py-[28px] bg-[#000] shadow-md max-[1100px]:px-[50px]">
      <nav className="flex items-center">
        <ul className="flex items-center w-[400px] justify-between">
          <li className="underline-animation">
            <a href="/">Volver</a>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default BackHeader