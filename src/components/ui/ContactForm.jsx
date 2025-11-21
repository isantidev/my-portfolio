import { useState, lazy, Suspense } from "react";
import { useLanguage } from "@context/LanguageContext";

const FloatingInput = lazy(() => import("@ui/FloatingInput"));
const FloatingTextarea = lazy(() => import("@ui/FloatingTextarea"));

const ContactForm = () => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact-send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Fail to send!");

            setStatus("sent");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 rounded-md px-4 py-8 ring-2 ring-custom-secondary"
        >
            <FloatingInput
                label={t("contact.content.form.inputText")}
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <FloatingInput
                label={t("contact.content.form.inputEmail")}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <FloatingTextarea
                label={t("contact.content.form.inputTextarea")}
                name="message"
                value={formData.message}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="mx-auto px-4 py-2 mt-4 text-lg text-custom-bg font-medium md:px-6 md:py-3 rounded-lg bg-custom-accent  hover:scale-110 hover:-translate-y-2 focus:bg-custom-accent/80 focus:scale-90"
            >
                {status === null && t("contact.callToAction")}
                {status === "sending" && (
                    <p>{t("components.buttonState.sending")}</p>
                )}
                {status === "sent" && <p>{t("components.buttonState.sent")}</p>}
                {status === "error" && (
                    <p>{t("components.buttonState.sendingError")}</p>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
