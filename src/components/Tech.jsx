import { useState } from "react";
import TechItem from "./TechItem";

const initialTechs = [
    "Postgres",
    "NodeJS",
    "TailwindCSS",
    "React",
    "Java",
    "Python",
    "JavaScript",
    "C",
];

function Tech(){
    const [techs,setTechs] = useState(initialTechs);

    function pop(item){
        setTechs((prev)=>{
            return prev.filter((i)=> i !== item)
        });
    }

    return(
        <div className="w-full sm:w-[80%] xl:w-[15%] 2xl:w-[10%] flex flex-col items-start justify-start xl:items-center ">
            <p className="text-white mt-4 mb-4 md:text-xl text-center">Technologies </p>
            <div className="border-2 border-t-0 p-2 w-full 
            flex xl:flex-col justify-center items-center flex-wrap xl:flex-nowrap gap-x-2 gap-y-2 group ">
               {
                techs.map((item,index) =>{
                    return  <TechItem key={index} itemName={item} index={index} pop={pop}/>})
               }
                
            </div>
        </div>

    )
}

export default Tech;