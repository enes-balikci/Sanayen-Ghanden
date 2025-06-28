import React, { useState } from "react";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Add authentication logic
    alert("Connecté avec succès !");
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Adresse e-mail:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
      <p>
        Pas de compte? <a href="/inscription">Inscrivez-vous ici</a>
      </p>
    </div>
  );
}
