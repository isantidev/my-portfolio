const Pill = ({ key, text }) => {
    return (
        <>
            <li
                key={key}
                className="py-1.5 px-3 text-md bg-custom-accent/20 rounded-md capitalize"
            >
                {text}
            </li>
        </>
    );
};

export default Pill;
