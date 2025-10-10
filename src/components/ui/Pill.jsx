const Pill = ({ key, text }) => {
    return (
        <>
            <li
                key={key}
                className="py-2 px-4 text-md bg-custom-accent/20 rounded-md capitalize"
            >
                {text}
            </li>
        </>
    );
};

export default Pill;
