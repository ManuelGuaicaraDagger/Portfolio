import Carousel from "../component/carousel/Carousel"
import pcv from "../assets/images/projects/pcv.png"
import psig from "../assets/images/projects/psig.png"
import turn from "../assets/images/projects/turn.png"
import sch from "../assets/images/projects/sch.png"
import ser from "../assets/images/projects/ser.png"

function Pcv () {
    const images = [pcv, psig, turn, sch, ser]
    return (
        <main className="flex flex-col justify-center items-center">
        <h2 className="text-[48px] my-[20px] font-bold text-center">Patitas Clínica Veterinaria</h2>
        <Carousel images={images}/>
        <div className="flex flex-col justify-center items-center mt-[80px]">
            <h3 className="text-3xl mb-[50px] font-bold text-center">Descripción</h3>
            <p className="w-1/2 text-lg">
            Aplicación web destinada a la reserva de turnos para una clínica veterinaria.El usuario deberá registrarse para poder pedir, cancelar o editar turnos.
            </p>
            <h3 className="text-3xl my-[50px] font-bold text-center">Tecnologías aplicadas</h3>
        </div>
        <a href="https://patitas-clinica-veterinaria-ue21.vercel.app/" target="_blank"  className="w-[175px] h-[35px] rounded-[10px] mt-[50px]  flex justify-center items-center bg-pt-blue text-black">Visitar</a>
        </main>
    )
}

export default Pcv
