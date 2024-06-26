import Carousel from "../component/carousel/Carousel"
import gd from "../assets/images/projects/gd.png"
import gsig from "../assets/images/projects/gsig.png"
import pro from "../assets/images/projects/pro.png"
import iph from "../assets/images/projects/iph.png"
import or from "../assets/images/projects/or.png"
import BackHeader from "../component/header/BackHeader"
import js from "../assets/images/js.png"
import ts from "../assets/images/ts.png"
import nx from "../assets/images/nx.png"
import tw from "../assets/images/tw.png"
import ht from "../assets/images/ht.png"
import jt from "../assets/images/jt.png"
import nd from "../assets/images/nd.png"
import ex from "../assets/images/ex.png"
import to from "../assets/images/to.png"
import sq from "../assets/images/sq.png"

function Dg () {
    const images = [gd, gsig, pro, iph, or]
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
        <h2 className="text-[48px] my-[20px] font-bold text-center">Digital Gen</h2>
        <Carousel images={images}/>
        <div className="flex flex-col justify-center items-center mt-[80px]">
            <h3 className="text-3xl mb-[50px] font-bold text-center">Descripción</h3>
            <p className="w-1/2 text-lg">
            E-commerce de productos tecnológicos donde el usuario podrá registrarse, acceder a la información detallada de los productos y adquirirlos.
            </p>
            <h3 className="text-3xl my-[50px] font-bold text-center">Tecnologías aplicadas</h3>
            <div className="flex flex-wrap justify-center items-center px-[200px]">
            {technologies.map((tech, index) => (
                <div className="text-center mx-[30px] my-[20px]" key={index} > 
                    <img
                        className="h-[100px] mb-[10px]"
                        src={tech.image}
                    />
                    <span>
                         {tech.title}
                    </span>
                </div>
        ))}
            </div>
        </div>
        <a href="https://secureingresshome.vercel.app/" target="_blank"  className="w-[175px] h-[35px] rounded-[10px] mt-[50px] mb-[100px] flex justify-center items-center bg-pt-blue text-black">Visitar</a>
        <span className="my-[50px]">Copyright 2024 © Todos los derechos reservados</span>
        </main>
        </>
    )
}

export default Dg
