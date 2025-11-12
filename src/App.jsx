import Hero from "@layout/Hero.jsx";
import Experience from "@layout/Experience.jsx";
import Projects from "@layout/Projects.jsx";
import Contact from "@layout/Contact";

const App = () => {
    return (
        <main className="flex flex-col w-full gap-16 mx-auto md:max-w-3xl lg:max-w-screen-xl px-4 pb-20 scroll-m-20">
            <Hero />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
};

export default App;
