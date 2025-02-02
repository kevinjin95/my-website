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
        <h2>La programmation</h2>
        <ul>
          <li>python</li>
          <li>web (HTML/CSS)</li>
          <li>javascript (React Native)</li>
          <li>PHP (MVC)</li>
          <li>golang</li>
        </ul>
        <br />
        <h2>Gestion de bases de données</h2>
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
        <h2>Test automatique</h2>
          <ul>
            <li>Jenkins</li>
          </ul>
        <br />
        <h2>Bureautique</h2>
        <ul>
          <li>Open Office</li>
          <li>Google Drive (Docs, Sheets, Slides)</li>
          <li>Lucidchart</li>
          <li>Canva</li>
        </ul>
      </div>
    </div>
  );
};
export default Competences;
