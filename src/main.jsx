import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./components/layout/Navigation.jsx";
import Hero from "./components/layout/Hero.jsx";
import "@styles/global.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navigation />
        <Hero />
        <Hero />
    </StrictMode>
);

// Hi, my name's Kevin Sierra I'm Colombia. I live in Funza, Cundinamarca. I'm ninetheen years old, my birthday is on February Fourtheen. I'm a student at SENA, my favorite subject is Math. My favorite sport is soccer. There are 5 people in my family. They are married My father is a pet food machine operator and my mother is a homecare I would like to be a Software Engineer because I really like to create stuff and make it run as it was magic. My hobby is riding bike in my free time, I also like whatching series and anime.  I don't like loud people. My favorite food is a mix of bittersweet fruit. My favorite drink is water. My favorite day of the week is sunday because I go out with my family and spear some time. My favorite month is October because I dress up with customes and decorate my house. My favorite singer is Bruno Mars
