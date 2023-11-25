function ProjectItem({ project, Icon }) {
    return (
        <div className=" bg-neutral-800 rounded-sm
        p-2 xl:p-4 
        flex gap-x-2 md:gap-x-5 h-[80px] xl:h-[120px]">
            <div className="w-[18%] md:w-[12%] xl:w-[18%] 2xl:w-[12%] shrink-0 bg-darkgrey rounded-sm flex justify-center items-center">
                <a href={project.link}>
                    <Icon className=" text-2xl sm:text-3xl xl:text-4xl text-lightblue hover:text-white cursor-pointer duration-100 " />
                </a>
            </div>
            <div>
                <span>
                    <a className="text-white text-xs sm:text-sm xl:text-lg font-medium cursor-pointer hover:underline decoration-lightblue underline-offset-4" href={project.link}>{project.name} </a>
                </span>
                <p className="text-white text-[0.7rem] sm:text-[0.8rem] xl:text-[0.95rem] 2xl:text-base md:pt-1 line-clamp-2 xl:line-clamp-2">{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectItem;