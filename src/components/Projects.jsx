import { MdEqualizer } from "react-icons/md";
import { BsFillCassetteFill, BsYoutube, BsBricks } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

import ProjectItem from "./ProjectItem";

const projects = [
    {
        name: "Sorting Visualizer",
        description: "A menu driven tool to visualize sorting algorithms built using Pygame a Python Graphics Library.",
        icon: MdEqualizer,
        link:"https://github.com/ttejas16/Sorting-Visualizer-in-Python"
    },
    {
        name: "Pokedex",
        description: "A website to search for pokemon data using React and open source api.",
        icon: BsFillCassetteFill,
        link:"https://github.com/ttejas16/pokedex-app"
    },
    {
        name: "Yt Homepage Clone",
        description: "Homepage of youtube with infinite scrolling using React and tailwind.",
        icon: BsYoutube,
        link:"https://github.com/ttejas16/Yt-Homepage-Clone"

    },
    {
        name: "Breakout",
        description: "Bricks out like game using Pygame.",
        icon: BsBricks,
        link:"https://github.com/ttejas16/BreakOut"

    },
    {
        name: "Portfolio Website",
        description: "Personal Portfolio Website using React and tailwind.",
        icon: CgWebsite,
        link:"https://github.com/ttejas16/portfolio"

    },
   
];

function Projects() {
    return (

        <div id="projects" 
            className="xl:w-[85%] 2xl:w-[90%] 
            flex flex-col justify-end items-start ">

            <h1 className="text-2xl xl:text-3xl text-lightblue font-medium py-4"> &gt; Projects.</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-3 gap-x-4">
                {
                    projects.map((project, index) => <ProjectItem key={index} project={project} Icon={project.icon} />)
                }
                

            </div>
        </div>
    )

}

export default Projects;