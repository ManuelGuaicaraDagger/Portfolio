import manu from "../../assets/images/manuelguaicara.jpg";
import lk from "../../assets/images/in.png";
import gh from "../../assets/images/gh.png";

function Main() {
    return(
        <main className="px-[200px] flex justify-around max-[1100px]:px-[50px] max-[400px]:px-[10px]" id="sobre-mi">
            <div className="py-[200px] max-[600px]:py-[50px]">
                <h1 className="text-[64px] font-bold leading-none max-[1300px]:text-[48px] max-[700px]:text-[32px] max-[500px]:text-[16px]">Manuel Guaicara</h1>
                <h2 className="text-[48px] leading-none my-[20px] max-[1300px]:text-[32px] max-[700px]:text-[16px] max-[500px]:text-[8px]">FullStack Developer</h2>
                <div className="flex mb-[20px]">
                <a href="https://www.linkedin.com/in/manuel-alejandro-guaicara-dagger-784a06194/" target="_blank" className="mr-[15px] max-[800px]:mr-[0px]">
                <img src={lk} alt="LinkedIn Manuel Guaicara" className="h-[40px]"/>
                </a>
                <a href="https://github.com/ManuelGuaicaraDagger" target="_blank">
                <img src={gh} alt="Github Manuel Guaicara" className="h-[40px]"/>
                </a>
                </div>
                <a href="/documents/ManuelGuaicara.pdf" download className="w-[175px] h-[35px] rounded-[10px]  flex justify-center items-center bg-pt-blue text-black max-[700px]:w-[122px] max-[700px]:text-[12px] max-[500px]:w-[100px] max-[500px]:text-[12px]">Descarga mi CV</a>
                </div>
            <div className="w-auto h-auto flex justify-center items-center pt-[70px] max-[600px]:py-[50px]">
                <img src={manu} alt="Manuel Guaicara" className="w-3/4 h-auto  border-4 rounded-[10px]" />
            </div>
        </main>
    )
}

export default Main