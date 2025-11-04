import Hero from "@layout/Hero.jsx";
import Experience from "@layout/Experience.jsx";
import Projects from "@layout/Projects.jsx";
import Stack from "@layout/Stack.jsx";

const App = () => {
    return (
        <div className="flex flex-col mx-auto lg:max-w-screen-xl px-4 pb-20">
            <Hero />
            <Experience />
            <Projects />
            <Stack />
        </div>
    );
};

export default App;
