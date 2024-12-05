import "../Home/Home";
import { useState } from "react";
import "../Noel/Noel.css";

const Noel = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        letter: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.letter) {
            try {
                const response = await fetch("https://santa-s-mailbox-backend.onrender.com/send-letter", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setSubmitted(true);
                    console.log("Lettre envoyée :", formData);
                } else {
                    alert("Erreur lors de l'envoi de la lettre.");
                }
            } catch (error) {
                console.error("Erreur :", error);
                alert("Erreur lors de l'envoi de la lettre.");
            }
        } else {
            alert("Merci de remplir tous les champs avant d'envoyer !");
        }
    };


    return (
        <main>
            <div className="snow"></div>
            <div className="snowbis"></div>
            <div className="noel-page">
                <h1 className="title">Écris ta lettre au Père Noël</h1>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="noel-form">
                        <div className="form-group">
                            <label htmlFor="name">Ton Prénom :</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Exemple : Léa"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Ton Adresse Mail :</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Exemple : lea@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="letter">Ta Lettre :</label>
                            <textarea
                                id="letter"
                                name="letter"
                                value={formData.letter}
                                onChange={handleChange}
                                placeholder="Cher Père Noël..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="send-button">
                            Envoyer ma lettre
                        </button>
                    </form>
                ) : (
                    <div className="success-message">
                        <h2>Merci pour ta lettre, {formData.name} ! 🎅</h2>
                        <p>Le Père Noël a reçu ta lettre et te répondra bientôt à {formData.email}.</p>
                        <button onClick={() => setSubmitted(false)} className="reset-button">
                            Écrire une autre lettre
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Noel;