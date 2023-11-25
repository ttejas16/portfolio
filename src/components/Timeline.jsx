function Timeline() {
    return (
        <div className="hidden xl:w-[50%] 2xl:w-[40%] 
            xl:flex justify-start items-start 
            xl:pl-24 2xl:pl-30 py-10">
            <div className="flex flex-col justify-start items-center text-white 2xl:text-lg font-medium">
                <hr className=" border-[2.5px] h-[80px] rounded-t-md" />

                <div className="rounded-full relative border-2 p-2 duration-75 border-lightblue group-hover hover:scale-[1.1] group">
                    <div className="flex absolute -top-1 left-14 p-2 border-lightblue border-b-2 w-[max-content]">
                        2019 - Completed School
                    </div>
                    <div className="bg-white p-2 rounded-full group-hover:bg-lightblue"></div>
                </div>

                <hr className=" border-[2.5px] h-[170px]" />
                <div className="rounded-full relative border-2 p-2 duration-75 border-lightblue group-hover hover:scale-[1.1] group">
                    <div className="flex absolute -top-1 left-14  p-2 text-white border-lightblue border-b-2 w-[max-content]">
                        2021 - Completed High School
                    </div>
                    <div className="bg-white p-2 rounded-full group-hover:bg-lightblue"></div>
                </div>

                <hr className=" border-[2.5px] h-[170px]" />
                <div className="rounded-full relative border-2 p-2 duration-75 border-lightblue group-hover hover:scale-[1.1] group">
                    <div className="flex absolute -top-1 left-14 p-2 border-lightblue border-b-2 w-[max-content]">
                        2024 - Exp Graduate Bsc. Computer Science
                    </div>
                    <div className="bg-white p-2 rounded-full group-hover:bg-lightblue"></div>
                </div>

                <hr className=" border-[2.5px] h-[170px]" />
                <div className="rounded-full relative border-2 p-2 duration-75 border-lightblue group-hover hover:scale-[1.1] group">
                    <div className="flex absolute -top-1 left-14 p-2  border-lightblue border-b-2 w-[max-content]">
                        ???? - ?
                    </div>
                    <div className="bg-white p-2 rounded-full group-hover:bg-lightblue"></div>
                </div>

                <hr className=" border-[2.5px] h-[80px] rounded-b-md" />
            </div>
        </div>
    )
}

export default Timeline;