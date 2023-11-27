import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function Socials({ isSocials, align }) {
    if (isSocials) {
        return (
            <div className={`fixed h-[100vh] top-0 ${align} flex flex-col justify-start items-center py-4 gap-y-4 text-lightblue pl-1`}>

                <hr className="h-[15%] border-[2px] rounded-2xl border-lightblue" />

                <div className="flex flex-col gap-y-4 text-white text-sm sm:text-base">

                    <div className="relative flex gap-x-3 cursor-pointer group">
                        <a href="https://instagram.com/ttejas16" target="blank">
                            <BsInstagram className="text-lg sm:text-2xl lg:text-3xl"  />
                        </a>
                        <div className="bg-neutral-800 p-[0.4em] rounded-sm absolute left-10 hidden group-hover:block text-white">
                            Instagram
                        </div>
                    </div>
                    <div className="relative flex gap-x-3 cursor-pointer group">
                        <a href="https://github.com/ttejas16" target="blank">
                            <BsGithub className="text-lg sm:text-2xl lg:text-3xl" />
                        </a>
                        <div className="bg-neutral-800 p-[0.4em] rounded-sm absolute z-50 left-10 hidden group-hover:block text-white">
                            Github
                        </div>
                    </div>
                    <div className="relative flex gap-x-3 cursor-pointer group">
                        <a href="https://www.linkedin.com/in/tejas-jagtap-49862723b/" target="blank">
                            <BsLinkedin className="text-lg sm:text-2xl lg:text-3xl" />
                        </a>
                        <div className="bg-neutral-800 p-[0.4em] rounded-sm absolute left-10 hidden group-hover:block text-white">
                            LinkedIn
                        </div>
                    </div>

                </div>
                <hr className="h-[30%] border-[2px] rounded-2xl border-lightblue" />
                <hr className="h-[15%] border-[2px] rounded-2xl border-lightblue" />
                <hr className="h-[30%] border-[2px] rounded-2xl border-lightblue" />
            </div>
        )

    }
    else {
        return (
            <div className={`fixed h-[100vh] top-0 ${align} flex flex-col justify-start items-center py-4 gap-y-4 text-lightblue pr-3 md:pr-4`}>


                <hr className="h-[10%] border-[2px] rounded-2xl border-lightblue" />
                <hr className="h-[30%] border-[2px] rounded-2xl border-lightblue" />
                <hr className="h-[20%] border-[2px] rounded-2xl border-lightblue" />
                <hr className="h-[10%] border-[2px] rounded-2xl border-lightblue" />
                <hr className="h-[30%] border-[2px] rounded-2xl border-lightblue" />
            </div>
        )
    }
}

export default Socials;