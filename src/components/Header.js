import React from "react";
import imgAccueil from "../media/img/fd_accueil.jpg";
import son from "../media/son/son.mp3"
import '../styles/App.css'
import { Link } from "react-router-dom";


/*fonction js burger */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


export default function Header() {
    return(
<header className="header_accueil">

    <div className="navbar">
        <div className="logo">Weboxing</div>
        <div className="onglets">
        <span className="burgerMenu" onClick={openNav}>
          ☰
        </span>
        
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            ×
          </a>
          <div className="overlay-content">
            <h1>Weboxing</h1>
            <Link to={"/"}>Accueil</Link>
            <Link to={"connexion"}>Connexion</Link>
            <Link to={"inscription"}>Inscription</Link>
          </div>
        </div>

        </div>
    </div>

    <div className="banniere_accueil">
        <img src={imgAccueil} alt="imgaccueil" id="background-img"/>
        <div className="container">
          <h1>Weboxing</h1>
        </div>
      </div>

      <div className="audio-container">
            <audio id="audioPlay" controls autoPlay loop>
            <source src={son} type="audio/mp3" />
       
        </audio>
        </div>
</header>
);
}