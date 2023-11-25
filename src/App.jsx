import About from "./components/About";
import Header from "./components/Header"
import Projects from "./components/Projects"
import Socials from "./components/Socials"
import Tech from "./components/Tech"
import Contact from "./components/Contact";
import ArrowDown from "./components/ArrowDown";

function App() {
    
    
    
    return (
        
            <section id="home" 
                className="px-[2em] pt-[4em] xl:px-[5em] xl:pt-[5em]
                w-full flex flex-col justify-start items-center">
                
                <Socials isSocials={true} align={"left-0"} />
                <Socials isSocials={false} align={"right-0"} />

                <Header />
                <section className="flex flex-col justify-center items-center xl:flex-row xl:items-end gap-x-8 px-3 py-5">
                    <Projects />
                    <Tech />
                </section>
                <ArrowDown link={"#about"} styles={"hidden xl:block mt-3"}/>

                <About />
                <ArrowDown link={"#contact"} styles={"hidden xl:block relative xl:-top-24"}/>
               
                <Contact />
            </section>
        
    )
}

export default App
