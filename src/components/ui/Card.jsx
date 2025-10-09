import { useState } from "react";

const Card = ({ title, enterprise, time, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const showMoreInfo = () => {
        setIsExpanded(!isExpanded);
    };

    const findDot = description?.indexOf(". ") + 1;

    let descriptionShown = description;
    let descriptionHidden;

    if (findDot) {
        descriptionShown = description.slice(0, findDot);
        descriptionHidden = description.slice(findDot + 1);
    }

    return (
        <>
            <article
                tabIndex={0}
                className="grid gap-4 p-2 rounded-sm hover:bg-custom-secondary focus:bg-custom-secondary transition ease-in-out
                    md:p-4 lg:py-8 lg:px-14 md:grid-cols-2"
            >
                <div className="relative flex flex-col gap-1">
                    <h4 className="text-custom-primary">{title}</h4>

                    <span>
                        <strong>{enterprise}</strong>
                    </span>
                    <span className="text-md font-light capitalize">
                        {time}
                    </span>
                </div>
                <p className="text-lg">
                    {descriptionShown}
                    <span className="sr-only">Show more info</span>
                    <span className={isExpanded === true ? "block" : "hidden"}>
                        {descriptionHidden}
                    </span>
                    <button
                        className="block font-light text-custom-primary/80 mt-1"
                        onClick={showMoreInfo}
                    >
                        {isExpanded === true ? "< Read less" : "Read more >"}
                    </button>
                </p>
            </article>
        </>
    );
};

export default Card;
