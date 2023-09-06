import React from "react";

import "../../../styles/App.css";
import imgInscription from "../../../media/img/fd_inscription.jpg";

export default function Main() {
  

  return (
    <main>
      <section className="inscription">
        <div className="gauche">
          <img src={imgInscription} alt="img_connexion " />
        </div>
        <div className="droite">
        <h2>Inscription</h2>

        <div className="content_form_inscription">
              <div className="content_name">
                <div className="label_nom">
                  <label htmlFor="nom">Nom:</label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Entrez votre nom..."
                    required
                  />
                </div>
                <div className="label_prenom">
                  <label htmlFor="prenom">Prénom:</label>
                  <input
                    id="prenom"
                    type="text"
                    placeholder="Entrez votre prénom..."
                    required
                  />
                </div>
              </div>
              <div className="label_email">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Entrez votre email..."
                  required
                />
              </div>
              
              <div className="label_genre">
                <label htmlFor="genre">Genre:</label>
                <input
                  type="radio"
                  value="homme"
                  id="homme"
                />
                <span name="homme">Homme</span>
                <input
                  type="radio"
                  value="femme"
                  id="femme"
                />
                <span name="femme">Femme</span>
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
              <div className="label_mdp">
                <label htmlFor="mdp_vf">Vérification de mot de passe :</label>
                <input
                  id="mdp_vf"
                  type="password"
                  placeholder="Entrez votre mot de passe ..."
                  required
                />

              </div>
              <button type="submit">Valider</button>
            </div>
      

            <div className="link">
            <p>Déjà Inscrit ? </p> 
          </div>
        </div>
      </section>
    </main>
  );
}
