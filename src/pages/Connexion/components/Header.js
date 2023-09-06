import React from "react";
import '../../../styles/App.css'
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
<header className="header">

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
            <Link to={"../inscription"}>Inscription</Link>
          </div>
        </div>

        </div>
    </div>

</header>
);
}