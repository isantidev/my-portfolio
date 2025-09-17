import "@styles/global.css";
import mineAI from "@images/mine-AI.jpeg";

const Header = () => {
    return (
        <>
            <h1 className="font-onest text-5xl">Bienvenidos</h1>
            <img src={mineAI} alt="foto mia" />
        </>
    );
};

export default Header;
