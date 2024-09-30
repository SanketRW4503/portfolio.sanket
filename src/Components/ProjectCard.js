import { FaGithub } from "react-icons/fa";



const ProjectCard = ({ data }) => {

    const { name, description, image, liveLink, github } = data;

    return <div className=" w-[300px]  flex-shrink-0 rounded-lg relative  shadow-[0px_0px_16px_6px_#00000024] touch-pan-x"  >

        <img src={image} className="rounded-t-lg w-full h-[200px] " alt="project-image" />
        <div className="p-4">


            <h1 className="font-bold text-lg">{name}</h1>
            <p className="text-justify">{description}</p>
            <div className="flex justify-end space-x-4 items-center">
                <a href={github} target="_blank" rel="noreferrer"><button ><FaGithub /></button></a>
                <a href={liveLink} target="_blank" rel="noreferrer"><button className="bg-red-500  text-white rounded-md px-4 py-1">Live</button></a>
            </div>


        </div>


    </div>
}

export default ProjectCard;