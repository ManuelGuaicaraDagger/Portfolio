import Carousel from "../component/carousel/Carousel"
import gd from "../assets/images/projects/gd.png"
import gsig from "../assets/images/projects/gsig.png"
import pro from "../assets/images/projects/pro.png"
import iph from "../assets/images/projects/iph.png"
import or from "../assets/images/projects/or.png"

function Dg () {
    const images = [gd, gsig, pro, iph, or]
    return (
        <main className="flex flex-col justify-center items-center">
        <h2 className="text-[48px] my-[20px] font-bold text-center">Digital Gen</h2>
        <Carousel images={images}/>
        <div className="flex flex-col justify-center items-center mt-[80px]">
            <h3 className="text-3xl mb-[50px] font-bold text-center">Descripción</h3>
            <p className="w-1/2 text-lg">
            E-commerce de productos tecnológicos donde el usuario podrá registrarse, acceder a la información detallada de los productos y adquirirlos.
            </p>
            <h3 className="text-3xl my-[50px] font-bold text-center">Tecnologías aplicadas</h3>
        </div>
        <a href="https://secureingresshome.vercel.app/" target="_blank"  className="w-[175px] h-[35px] rounded-[10px] mt-[50px]  flex justify-center items-center bg-pt-blue text-black">Visitar</a>
        </main>
    )
}

export default Dg
