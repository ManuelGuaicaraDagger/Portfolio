import Carousel from "../component/carousel/Carousel"
import sih from "../assets/images/projects/sih.png"
import sign from "../assets/images/projects/sign.png"
import dash from "../assets/images/projects/dash.png"
import props from "../assets/images/projects/props.png"
import chat from "../assets/images/projects/chat.png"

function Sih () {
    const images = [sih, sign, dash, props, chat]
    return (
        <main className="flex flex-col justify-center items-center">
        <h2 className="text-[52px] my-[20px] font-bold text-center">Secure Ingress Home</h2>
        <Carousel images={images}/>
        <a href="https://secureingresshome.vercel.app/" target="_blank"  className="w-[175px] h-[35px] rounded-[10px] mt-[50px]  flex justify-center items-center bg-pt-blue text-black">Visitar</a>
        <div className="flex flex-col justify-center items-center mt-[80px]">
            <h3 className="text-3xl mb-[50px] font-bold text-center">Descripción</h3>
            <p className="w-1/2 text-lg">
                Aplicación web destinada a la administración de barrios privados.Cuenta con el rol de administrador, que registrará cada una de las propiedades para posteriormente ser ocupadas por un residente, este es el segundo rol, desde su dashboard 
                podrá realizar los pagos de expensas y generar autorizaciones de ingreso para sus invitados.Estas autorizaciones serán aprobadas por el personal de seguridad. 
            </p>
            <h3 className="text-3xl my-[50px] font-bold text-center">Tecnologías aplicadas</h3>
        </div>
        </main>
    )
}

export default Sih
