import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const Presentation = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Présentation</h1>
        <p>
          Bonjour je m'appelle Kevin, j'ai 28 ans et je vis dans le 95. 
          Ceci est mon site internet personnel que j'ai développé 
          moi-même avec le langage Javascript et la librairie React, 
          il permet d'exposer les faits importants à retenir à mon sujet.
        </p>
        <p class="Warning">A noter que mon site est encore en développement, 
          ainsi vous trouverez encore des bugs, des projets qui ne sont pas 
          spécifiés, je dois aussi faire une refonte complète de la page 
          des compétences, des faute d'orthographes, etc... C'est pourquoi, 
          soyez indulgent s'il vous plaît.</p>
      </div>
    </div>
  );
};
export default Presentation;
