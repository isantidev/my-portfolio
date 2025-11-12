import { lazy, Suspense } from "react";

import Hero from "@layout/Hero.jsx";

const Experience = lazy(() => import("@layout/Experience.jsx"));
const Projects = lazy(() => import("@layout/Projects.jsx"));
const Contact = lazy(() => import("@layout/Contact.jsx"));

const App = () => {
    return (
        <main className="flex flex-col w-full gap-16 mx-auto md:max-w-3xl lg:max-w-screen-xl px-4 pb-20 scroll-m-20">
            <Hero />
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
            <Suspense fallback={null}>
                <Projects />
            </Suspense>
            <Suspense fallback={null}>
                <Contact />
            </Suspense>
        </main>
    );
};

export default App;
