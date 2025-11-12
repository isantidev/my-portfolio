import { Resend } from "resend";
import { getEnv } from "./env.js";

const resend = new Resend(getEnv("RESEND_API_KEY"));
const emailDefault = getEnv("DEFAULT_EMAIL");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing fields" });
    }

    try {
        const data = await resend.emails.send({
            from: `Portfolio <${getEnv("RESEND_EMAIL")}>`,
            to: emailDefault,
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <h2>Nuevo mensaje desde tu portafolio</h2>
                <p><b>Nombre:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Mensaje:</b><br/>${message}</p>
            `,
            replyTo: email,
        });

        return res.status(200).json({ ok: true, data });
    } catch (error) {
        console.error("❌ Error enviando correo:", error);
        return res.status(500).json({ ok: false, error });
    }
}
