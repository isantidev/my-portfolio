const Pill = ({ text }) => {
    return (
        <>
            <li className="py-1.5 px-4 text-lg bg-custom-accent/40 capitalize">
                {text}
            </li>
        </>
    );
};

export default Pill;
