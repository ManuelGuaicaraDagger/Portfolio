import manu from "../../assets/images/manuelguaicara.jpg"
function Main() {
    return(
        <main className="px-[200px] flex justify-around">
            <div className="py-[200px]">
                <h1 className="text-[64px] font-bold leading-none">Manuel Guaicara</h1>
                <h2 className="text-[48px] leading-none my-[20px]">FullStack Developer</h2>
                <button className="w-[175px] h-[35px] rounded-[10px]  flex justify-center items-center bg-pt-blue text-black">Descarga mi CV</button>
                </div>
            <div className="w-auto h-auto flex justify-center items-center pt-[70px]">
                <img src={manu} alt="Manuel Guaicara" className="w-3/4 h-auto  border-4 rounded-[10px]" />
            </div>
        </main>
    )
}

export default Main