import Carousel from "../component/carousel/Carousel"
import sih from "../assets/images/projects/sih.png"
import sign from "../assets/images/projects/sign.png"
import dash from "../assets/images/projects/dash.png"
import props from "../assets/images/projects/props.png"
import chat from "../assets/images/projects/chat.png"
import BackHeader from "../component/header/BackHeader"
import js from "../assets/images/js.png"
import ts from "../assets/images/ts.png"
import nx from "../assets/images/nx.png"
import tw from "../assets/images/tw.png"
import ht from "../assets/images/ht.png"
import nd from "../assets/images/nd.png"
import ex from "../assets/images/ex.png"
import to from "../assets/images/to.png"
import sq from "../assets/images/sq.png"

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
    image: nx,
    title: "Next.JS"
    },
    {
    image: tw,
    title: "Tailwind"
    },
    {
    image: ht,
    title: "HTML"
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

function Sih () {
    const images = [sih, sign, dash, props, chat]
    return (
        <>
        <BackHeader />
        <main className="flex flex-col justify-center items-center">
        <h2 className="text-[48px] my-[20px] font-bold text-center max-[800px]:text-[32px] max-[400px]:text-[24px]">Secure Ingress Home</h2>
        <Carousel images={images}/>
        <div className="flex flex-col justify-center items-center mt-[80px]">
            <h3 className="text-3xl mb-[50px] font-bold text-center max-[800px]:text-[24px] max-[400px]:text-[16px]">Descripción</h3>
            <p className="w-1/2 text-lg max-[800px]:text-[14px] max-[400px]:text-[12px]">
                Aplicación web destinada a la administración de barrios privados.Cuenta con el rol de administrador, que registrará cada una de las propiedades para posteriormente ser ocupadas por un residente, este es el segundo rol, desde su dashboard 
                podrá realizar los pagos de expensas y generar autorizaciones de ingreso para sus invitados.Estas autorizaciones serán aprobadas por el personal de seguridad. 
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
        <a href="https://secureingresshome.vercel.app/" target="_blank"  className="w-[175px] h-[35px] rounded-[10px] mt-[50px] mb-[100px]  flex justify-center items-center bg-pt-blue text-black">Visitar</a>
        <span className="my-[50px] max-[400px]:text-[12px]">Copyright 2024 © Todos los derechos reservados</span>
        </main>
        </>
    )
}

export default Sih
