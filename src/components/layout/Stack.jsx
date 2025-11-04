import { IoCodeSlash } from "react-icons/io5";

const Stack = () => {
    return (
        <>
            <section
                aria-label="stack"
                className="scroll-m-20 w-full mx-auto flex flex-col gap-4 lg:max-w-screen-xl px-4 pb-20
                md:max-w-2xl"
                id="Stack"
            >
                <header className="inline-flex gap-2 align-middle">
                    <span className="w-8 h-full p-1 *:w-full flex justify-center">
                        <IoCodeSlash className="my-auto size-full" />
                    </span>
                    <h2>Stack</h2>
                </header>
                <p className="ml-4 text-xl text-custom-text/80">
                    Tools and technologies I use to build websites.
                </p>

                <ul
                    className="grid grid-cols-5 place-items-center
                    [&_svg]:size-24 [&_svg]:p-4 "
                >
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">
                            Javascript
                        </small>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">
                            Tailwind CSS
                        </small>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">Git</small>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">React JS</small>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">HTML5</small>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">CSS3</small>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">MySQL</small>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <svg>
                            <use href={``}></use>
                        </svg>
                        <small className="font-medium text-lg">VS Code</small>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Stack;
