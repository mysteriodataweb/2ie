"use client";
import { useState } from "react";
const Newsletter = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            alert(`Message envoyé : ${message}`);
            setMessage("");
        } else {
            alert("Veuillez entrer un message !");
        }
    };
    return (
        <section>
    <h2>Laisser un message</h2>
        <form onSubmit={handleSubmit} className="message-form">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message ici..."
            className="message-input"
          />
          <button type="submit" className="btn-submit">
            Envoyer
          </button>
            </form>
        </section>  
            );

}

export default Newsletter;