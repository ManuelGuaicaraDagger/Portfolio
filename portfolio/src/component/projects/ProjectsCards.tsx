import React from 'react';


interface ProjectsCardsProps {
  image: string;
  title: string;
  text: string;
  path: string;
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ image, title, text, path }) => {
  return (
    <div className=' h-[350px] flex justify-between items-center my-[50px] border-t border-b mx-[200px] max-[1450px] max-[1450px]:flex-col max-[1450px]:h-auto max-[1100px]:mx-[50px] max-[400px]:mx-[10px]'>
      <img className='w-auto h-full ' src={image} alt={title} />
      <div className='h-full flex flex-col justify-around items-center p-[20px]'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-sm text-start pl-[50px] max-[1450px]:my-[30px] max-[1400px]:pl-0 max-[400px]:text-[12px]'>{text}</p>
      <a className="w-[175px] h-[35px] rounded-[10px]  flex justify-center items-center bg-pt-blue text-black" href={path}>Saber más</a>
      </div>
    </div>
  );
}

export default ProjectsCards;
