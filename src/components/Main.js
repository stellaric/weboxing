import React from "react";
import img_actualite from '../media/img/fd_actualite.jpg';
import img_qsn from '../media/img/fd_qsn.jpg';
import img_contact from '../media/img/fd_contact.jpg';

export default function Main() {
    return(
<main>
 <section className="bienvenue">
    <h2>Bienvenue</h2>
    <p>"Réveillez le champion qui sommeille en vous avec Weboxing !"</p>
    <button>Se Connecter</button>
 </section>
 <section className="actualite">
<div className="gauche">
<img src={img_actualite} alt="img_actualite" />
</div>
<div className="droite">
    <h2>Actualité</h2>
    <p>🥊 Nouveau cours de boxe de groupe ! Rejoignez-nous pour une expérience d'entraînement intense et dynamique.
          Notre entraîneur professionnel vous guidera à travers des séances de boxe variées, adaptées à tous les niveaux.
           Ne manquez pas cette occasion de vous entraîner dans une ambiance conviviale et motivante.
            Réservez votre place dès maintenant et venez découvrir les bienfaits de la boxe pour votre corps et votre esprit ! 🥊</p>
</div>
 </section>
 <section className="qsn">
 <div className="gauche">
    <h2>Qui sommes-nous ?</h2>
    <p> Chez Weboxing, nous sommes une équipe passionnée par la boxe et dévouée à offrir à nos clients une expérience exceptionnelle.

Notre objectif est de fournir des équipements de boxe de haute qualité, soigneusement sélectionnés pour répondre aux besoins des boxeurs de tous niveaux. De plus, nous sommes fiers de proposer des services d'entraînement professionnels, dispensés par des coachs expérimentés, pour vous aider à atteindre vos objectifs sportifs. 

Rejoignez la communauté Weboxing dès aujourd'hui et découvrez notre passion pour la boxe et notre engagement envers votre réussite sportive !</p>
 </div>
 <div className="droite"><img src={img_qsn} alt="img_qsn" /></div>
 </section>
 <section className="contact">
 <div className="gauche"><img src={img_contact} alt="img_contact" /></div>
 <div className="droite">

 <div className="droite">
          <h2>Nous Contacter</h2>

         
            <div className="content_form">
              <div className="label_email">
                <label name="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Entrez votre email..."
                  required
                />
               
              </div>
              <div className="label_sujet">
                <label name="sujet">Sujet:</label>
                <input
                  type="text"
                  name="sujet"
                  placeholder="Sujet de votre  message.."
                  required
                />
               
              </div>
              <div className="label_message">
                <label name="message">Message:</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Ecrivez votre  message.."
                  required
                ></textarea>
              </div>

              <button type="submit">Valider </button>
            </div>
       
        </div>
 </div>
 </section>
 <section className="newsletter">
 <div className="content_news">
          <h2>Newsletter</h2>
          <p>
            Inscrivez-vous à notre newsletter pour rester informé(e) et
            connecté(e) avec Weboxing !
          </p>
          
         
            <input
              type="text"
              name="email"
              placeholder="Entrez votre email..."
              required
            />

            <button type="submit">Valider</button>
         
        </div>
 </section>
</main>
);
}