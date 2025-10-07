import sprite from "@icons/sprite.svg";

const Stack = () => {
    return (
        <>
            <section
                aria-label="stack"
                className="scroll-m-20 w-full mx-auto flex flex-col gap-4 lg:max-w-screen-xl px-4 pb-20
                md:max-w-2xl"
                id="Stack"
            >
                <ul
                    className="grid grid-cols-2 place-items-center
                    [&_svg]:size-20 [&_svg]:p-4"
                >
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#javascript`}></use>
                        </svg>
                    </li>
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#tailwindcss`}></use>
                        </svg>
                    </li>
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#git`}></use>
                        </svg>
                    </li>
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#react`}></use>
                        </svg>
                    </li>
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#html5`}></use>
                        </svg>
                    </li>
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#css`}></use>
                        </svg>
                    </li>
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#mysql`}></use>
                        </svg>
                    </li>
                    <li tabIndex={0} className="">
                        <svg>
                            <use href={`${sprite}#vscode`}></use>
                        </svg>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Stack;
