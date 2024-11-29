import { useState } from "react";

export default function Contato() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { user_name, user_email, message } = formData;

        const mailtoLink = `mailto:wilintongabrielss1@gmail.com?subject=${encodeURIComponent(user_email)}&body=${encodeURIComponent(
            `Nome: ${user_name}\n\nMensagem: ${message}`
        )}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-6 bg-zinc-800 m-4 rounded-lg shadow-lg max-w-4xl w-full">
                <h2 className="text-white font-bold text-3xl mb-4 text-center">Entre em Contato!</h2>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Seu Nome"
                        className="p-3 rounded-md bg-zinc-700 placeholder-white text-white font-light w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="user_email"
                        placeholder="Assunto"
                        className="p-3 rounded-md bg-zinc-700 placeholder-white text-white font-light w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Mensagem"
                        className="p-3 rounded-md bg-zinc-700 placeholder-white text-white font-light w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="flex justify-center bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}
