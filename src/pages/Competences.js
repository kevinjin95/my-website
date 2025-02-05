import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const Competences = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Compétences</h1>
        <div class="Skills">
          <div class="HardSkills">
            <h2>Hard Skills</h2>
            <h3>La programmation</h3>
            <ul>
              <li>python</li>
              <li>web (HTML/CSS)</li>
              <li>javascript (React Native)</li>
              <li>PHP (MVC)</li>
              <li>golang</li>
            </ul>
            <br />
            <h3>La gestion de bases de données</h3>
            <p>non-relationnels</p>
            <ul>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
            <p>relationnels</p>
            <ul>
              <li>SQLite</li>
            </ul>  
            <br />
            <h3>Test automatique</h3>
              <ul>
                <li>Jenkins</li>
              </ul>
            <br />
            <h3>Bureautique</h3>
            <ul>
              <li>Open Office</li>
              <li>Google Drive (Docs, Sheets, Slides)</li>
              <li>Lucidchart</li>
              <li>Canva</li>
            </ul>
            <br />
            <h3>Virtualisation</h3>
            <ul>
              <li>Docker</li>
            </ul>
          </div>
          <div class="SoftSkills">
            <h2>Soft Skills</h2>
            <ul>
              <li>Ouvert d’esprit</li>
              <li>Sociable</li>
              <li>Motivé</li>
              <li>Sens de l’écoute</li>
              <li>Esprit d'équipe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Competences;
