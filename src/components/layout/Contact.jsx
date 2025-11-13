import { IoCall } from "react-icons/io5";
import { lazy, Suspense } from "react";

const ContactForm = lazy(() => import("@ui/ContactForm.jsx"));
const AsideInfo = lazy(() => import("@ui/AsideInfo.jsx"));

const Contact = () => {
    return (
        <section
            id="Contact"
            className="scroll-m-20 grid grid-row-[auto_auto_1fr] grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-8"
        >
            <header className="inline-flex gap-2 align-middle row-start-1 lg:col-span-2">
                <span className="w-8 h-full p-1 *:w-full flex justify-center">
                    <IoCall className="my-auto size-full" />
                </span>
                <h2>Contact</h2>
            </header>
            <Suspense fallback={null}>
                <ContactForm />
                <AsideInfo />
            </Suspense>
        </section>
    );
};

export default Contact;
