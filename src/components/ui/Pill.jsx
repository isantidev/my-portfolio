const Pill = ({ keyName, text }) => {
    return (
        <>
            <li
                key={keyName}
                className="py-1.5 px-4 text-md font-extralight bg-custom-secondary/40 rounded-md lowercase"
            >
                {text}
            </li>
        </>
    );
};

export default Pill;
