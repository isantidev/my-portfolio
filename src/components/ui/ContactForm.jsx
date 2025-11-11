import { FloatingInput } from "@ui/FloatingInput";
import { FloatingTextarea } from "@ui/FloatingTextarea";
import { useState } from "react";

export const ContactForm = () => {
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
            className="flex flex-col gap-8 rounded-md p-4 bg-custom-secondary text-custom-accent/60"
        >
            <FloatingInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <FloatingInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <FloatingTextarea
                label="I'll be happy to get your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="mx-auto px-4 py-2 text-lg md:px-6 md:py-3 rounded-lg bg-custom-primary/60 text-custom-text opacity-90 hover:scale-125 focus:opacity-100 focus:scale-90"
            >
                Let's get in contact
            </button>

            {status === "sending" && <p>Enviando...</p>}
            {status === "sent" && <p>Mensaje enviado ✅</p>}
            {status === "error" && <p>Error al enviar ❌</p>}
        </form>
    );
};
