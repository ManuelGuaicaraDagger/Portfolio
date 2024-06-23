import js from "../../assets/images/js.png"
import ts from "../../assets/images/ts.png"
import react from "../../assets/images/react.png"
import rx from "../../assets/images/rx.png"
import nx from "../../assets/images/nx.png"
import cs from "../../assets/images/cs.png"
import tw from "../../assets/images/tw.png"
import bt from "../../assets/images/bt.png"
import ht from "../../assets/images/ht.png"
import jt from "../../assets/images/jt.png"
import jm from "../../assets/images/jm.png"
import nd from "../../assets/images/nd.png"
import ex from "../../assets/images/ex.png"
import to from "../../assets/images/to.png"
import md from "../../assets/images/md.png"
import sq from "../../assets/images/sq.png"
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
    image: nx,
    title: "Next.JS"
    },
    {
    image: cs,
    title: "CSS"
    },
    {
    image: tw,
    title: "Tailwind"
    },
    {
    image: bt,
    title: "Bootstrap"
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
    image: jm,
    title: "Jasmine"
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
    image: md,
    title: "MongoDB"
    },
    {
    image: sq,
    title: "PostgreSQL"
    },
]

const Technologies = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-[60px]" id="tecnologias">
            <div className="text-center">
                <h2 className="text-[52px] mb-[50px] font-bold">Tecnologías</h2>
            </div>
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
        </section>
    )
}

export default Technologies