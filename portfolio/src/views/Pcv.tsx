import Carousel from "../component/carousel/Carousel"
import pcv from "../assets/images/projects/pcv.png"
import psig from "../assets/images/projects/psig.png"
import turn from "../assets/images/projects/turn.png"
import sch from "../assets/images/projects/sch.png"
import ser from "../assets/images/projects/ser.png"
import BackHeader from "../component/header/BackHeader"
import react from "../assets/images/react.png"
import js from "../assets/images/js.png"
import ts from "../assets/images/ts.png"
import rx from "../assets/images/rx.png"
import cs from "../assets/images/cs.png"
import ht from "../assets/images/ht.png"
import jt from "../assets/images/jt.png"
import nd from "../assets/images/nd.png"
import ex from "../assets/images/ex.png"
import to from "../assets/images/to.png"
import sq from "../assets/images/sq.png"

function Pcv () {
    const images = [pcv, psig, turn, sch, ser]
    const technologies = [
        {
        image: js,
        title: "JavaScript"
        },
        {
        image: ts,
        title: "TypeScript"
        },
        {
        image: react,
        title: "React.JS"
        },
        {
        image: rx,
        title: "Redux"
        },
        {
        image: cs,
        title: "CSS"
        },
        {
        image: ht,
        title: "HTML"
        },
        {
        image: jt,
        title: "Jest"
        },
        {
        image: nd,
        title: "Node.JS"
        },
        {
        image: ex,
        title: "Express"
        },
        {
        image: to,
        title: "TypeORM"
        },
        {
        image: sq,
        title: "PostgreSQL"
        },
    ]
    return (
        <>
        <BackHeader />
        <main className="flex flex-col justify-center items-center">
        <h2 className="text-[48px] my-[20px] font-bold text-center max-[800px]:text-[32px] max-[400px]:text-[24px]">Patitas Clínica Veterinaria</h2>
        <Carousel images={images}/>
        <div className="flex flex-col justify-center items-center mt-[80px]">
            <h3 className="text-3xl mb-[50px] font-bold text-center max-[800px]:text-[24px] max-[400px]:text-[16px]">Descripción</h3>
            <p className="w-1/2 text-lg max-[800px]:text-[14px] max-[400px]:text-[12px]">
            Aplicación web destinada a la reserva de turnos para una clínica veterinaria.El usuario deberá registrarse para poder pedir, cancelar o editar turnos.
            </p>
            <h3 className="text-3xl my-[50px] font-bold text-center max-[800px]:text-[24px] max-[400px]:text-[16px]">Tecnologías aplicadas</h3>
            <div className="flex flex-wrap justify-center items-center px-[200px] max-[1100px]:px-[50px] max-[400px]:px-[10px]">
            {technologies.map((tech, index) => (
                <div className="flex flex-col justify-center items-center text-center mx-[30px] my-[20px] max-[550px]:mx-[10px]" key={index} > 
                    <img
                        className="h-[100px] mb-[10px] max-[1300px]:h-[80px] max-[850px]:h-[60px] max-[550px]:h-[40px] max-[400px]:h-[25px]"
                        src={tech.image}
                    />
                    <span className="max-[400px]:text-[12px]">
                         {tech.title}
                    </span>
                </div>
        ))}
            </div>
        </div>
        <a href="https://patitas-clinica-veterinaria-ue21.vercel.app/" target="_blank"  className="w-[175px] h-[35px] rounded-[10px] mt-[50px] mb-[100px] flex justify-center items-center bg-pt-blue text-black">Visitar</a>
        <span className="my-[50px] max-[400px]:text-[12px]">Copyright 2024 © Todos los derechos reservados</span>
        </main>
        </>
    )
}

export default Pcv
