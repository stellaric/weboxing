import React from "react";

import "../../../styles/App.css";
import imgConnexion from "../../../media/img/fd_connexion.jpg";

export default function Main() {
  

  return (
    <main>
      <section className="connexion">
        <div className="gauche">
          <img src={imgConnexion} alt="img_connexion " />
        </div>
        <div className="droite">
          <h2>Connexion</h2>

            <div className="content_form_connexion">
              <div className="label_email">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Entrez votre email..."
                  required
                />
              </div>
              <div className="label_mdp">
                <label htmlFor="mdp">Mot de passe :</label>
                <input
                  id="mdp"
                  type="password"

                  placeholder="Entrez votre mot de passe ..."
                  required
                />
              </div>

              <button type="submit">Se Connecter</button>
            </div>
      

          <div className="link">
            <p>Pas de compte ? </p>{" "}
            
          </div>
        </div>
      </section>
    </main>
  );
}
