const Pill = ({ key, text }) => {
    return (
        <>
            <li
                key={key}
                className="py-1.5 px-4 text-md font-extralight bg-custom-accent/20 rounded-md lowercase"
            >
                {text}
            </li>
        </>
    );
};

export default Pill;
