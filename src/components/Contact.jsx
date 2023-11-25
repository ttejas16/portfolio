import { useRef, useState } from "react";
import ArrowDown from "./ArrowDown";

function Contact() {
    const [message,setMessage] = useState(null);
    const timeoutRef = useRef();

    function handleClick(){
        clearTimeout(timeoutRef.current);
        setMessage("Copied to clipboard!");

        timeoutRef.current = setTimeout(() => {
            setMessage(null);
        },1500);

    }


    return (
        <section className="px-3 py-10 w-full flex flex-col items-center" id="contact">

            <div className="flex w-full justify-center items-start">
                <div className="w-full lg:w-[70%] xl:w-[50%] flex flex-col justify-center items-start ">
                    <h1 className="text-lightblue text-2xl xl:text-3xl font-medium"> &gt; Get In Touch.</h1>

                    <div className="text-sm sm:text-base xl:text-xl px-1 sm:px-9 mt-8 leading-[1.25rem]">
                        <p className="mt-1">Feel free to contact anytime!</p>
                        <p>Message me using - <span
                          
                        onClick={(e) => {
                            navigator.clipboard.writeText(e.currentTarget.innerHTML);
                            handleClick();
                        }}
                        className="underline decoration-lightblue underline-offset-4 cursor-pointer">
                            jagtaptejas128@gmail.com
                        </span></p>
                        <p className="mt-2 text-sm">{message}</p>
                    </div>
                </div>

                <div className="hidden w-[50%] xl:flex flex-col justify-center items-center gap-y-5">
                    <div className="w-[80%] flex justify-center">
                        <img src="/src/assets/nature.svg" alt="nature image" className="w-[80%] object-cover" />
                        
                    </div>
                </div>
            </div>

            <div className="mt-12 py-10 xl:p-10 w-full lg:w-[70%] xl:w-full flex justify-between items-center  ">
                <p className="text-neutral-500 text-xs xl:text-base ">Hehehehe The End. Have a great day!</p>
                <ArrowDown link={"#home"} styles={"rotate-180"}/>
            </div>

        </section>
    )
}

export default Contact;