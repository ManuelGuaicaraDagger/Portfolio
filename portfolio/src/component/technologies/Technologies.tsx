import js from "../../assets/images/js.png"
import ts from "../../assets/images/ts.png"
import react from "../../assets/images/react.png"
import rx from "../../assets/images/rx.png"
import nx from "../../assets/images/nx.png"
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
    image: "",
    title: "CSS"
    },
    {
    image: "",
    title: "Tailwind"
    },
    {
    image: "",
    title: "Bootstrap"
    },
    {
    image: "",
    title: "HTML"
    },
    {
    image: "",
    title: "Jest"
    },
    {
    image: "",
    title: "Jasmine"
    },
    {
    image: "",
    title: "Node.JS"
    },
    {
    image: "",
    title: "Express"
    },
    {
    image: "",
    title: "TypeORM"
    },
    {
    image: "",
    title: "MongoDB"
    },
    {
    image: "",
    title: "PostgreSQL"
    },
]

const Technologies = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-[60px]">
            <div className="text-center">
                <h1 className="text-[48px] mb-[50px] font-bold">Tecnologías</h1>
            </div>
            <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
                <div className="text-center mx-[10px]" key={index} > 
                    <img
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