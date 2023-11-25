import { RiArrowDownSLine } from "react-icons/ri";
function ArrowDown({ styles, link }) {
    return (

        <a
            href={link}
            className={`self-center rounded-full bg-neutral-800 text-white p-1 
                    hover:transform
                    hover:translate-y-[5px]
                    duration-100
                    hover:text-lightblue
                    cursor-pointer ${styles}`}>
            <RiArrowDownSLine size={'35px'} />
        </a>

    )
}

export default ArrowDown;