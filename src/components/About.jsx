import Timeline from "./Timeline";

function About() {
    return (
        <section className="mt-5 xl:mt-10 px-3 py-10 flex flex-col xl:flex-row justify-start items-center xl:items-start"  id="about">

            <div className="w-full lg:w-[70%] xl:w-[50%] 2xl:w-[60%] flex flex-col justify-start items-start">

                <div className="">
                    <h1 className="text-lightblue text-2xl xl:text-3xl font-medium"> &gt; About Me.</h1>
                    <div className="flex flex-col items-start gap-y-5 xl:gap-y-14 mt-5 text-[0.84rem] md:text-base xl:text-lg 2xl:text-xl 
                    leading-[1.4em] px-0 sm:px-9">
                        <p className="leading-[1.5em]">
                            In 2019 completed my 10 school years from PES Modern English Medium High School Pune, India.
                            Didn't do much in those days to be honest but the last 4 years were the best of my life. Hanging out with friends,
                            studying without any worries about jobs and stuff,this was the best!!.     
                        </p>
                        <p className="leading-[1.5em]">
                            After school clueless me decided to take Science as major. The next two years were the 'not so good' years of whatever life
                            I had lived at that point. The pandemic situation keeps getting worse. But after completing those two years in college I decided to take a Computer Science Degree. Maybe my love for video games especially mobile games lead me to that descision.   
                        </p>
                        <p className="leading-[1.5em]">
                            In the next 3 years of my CS Degree I learned much more things about programming from the very basics to topics like 
                            Data Structures and many more. The first ever programming language I learned was C. Using this knowledge I kept learning
                            even more new things and started Web Development.  
                        </p>
                        <p className="leading-[1.5em]">
                            I wonder what the <span className="text-lightblue font-medium">Future</span> holds?🤔 All we can do is wonder and keep looking forward to it!
                        </p>
                    </div>
                </div>
            </div>
            <Timeline/>
        </section>
    )
}

export default About;