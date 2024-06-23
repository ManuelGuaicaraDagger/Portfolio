import ProjectsCards from './ProjectsCards';
import sih from '../../assets/images/sih.png'
import pcv from '../../assets/images/pcv.png'
import gd from '../../assets/images/gd.png'

const projects = [
    {
      image: sih,
      title: 'Secure Ingress Home',
      text: 'Aplicación web destinada a la administración de barrios privados. Cuenta con el rol de administrador, que registrará cada una de las propiedades para posteriormente ser ocupadas por un residente, este es el segundo rol, desde su dashboard podrá realizar los pagos de expensas y generar autorizaciones de ingreso para sus invitados. Estas autorizaciones serán aprobadas por el personal de seguridad.',
      path: '/SIH'
    },
    {
      image: pcv,
      title: 'Patitas clínica veterinaria',
      text: 'Aplicación web destinada a la reserva de turnos para una clínica veterinaria.El usuario deberá registrarse para poder pedir, cancelar o editar turnos.',
      path: '/PCV'
    },
    {
      image: gd,
      title: 'Gen Digital',
      text: 'E-commerce de productos tecnológicos donde el usuario podrá registrarse, acceder a la información detallada de los productos y adquirirlos.',
      path: '/SIH'
    }
];

function Projects() {
  return (
    <section className="flex justify-center mt-[130px]">
      <div className="text-center">
        <h1 className="text-[52px] mb-[20px] font-bold">Proyectos</h1>
        <div className='flex flex-col justify-center items-center'>
        {projects.map((project, index) => (
          <ProjectsCards
            key={index}
            image={project.image}
            title={project.title}
            text={project.text}
            path={project.path}
          />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;