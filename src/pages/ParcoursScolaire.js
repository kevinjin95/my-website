import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const ParcoursScolaire = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Parcours scolaire</h1>
        <h2>Baccalauréat et BTS</h2>
        <p>
          Diplômé d'un BAC électrotechnique en 2015, ce diplôme m'a permis d'acquérir des 
          connaissances en rapport avec la production, le transport, la distribution, le 
          traitement, la transformation, la gestion et l’utilisation de l’énergie électrique. 
        </p>
        <p>
          Ensuite j'ai tenté d'obtenir un BTS CRSA, ce diplôme m'a permis d'apprendre à utiliser 
          les outils et les techniques nécéssaires pour définir les chaînes fonctionnelles 
          (fonctions techniques et techniques associées) en évaluant les coûts et les délais, pour 
          choisir les constituants et les éléments d'intégration et d'animation de l'ensemble.
          
        </p>
        <p>
          C'est à la suite de ces 2 diplômes que je me suis lancé dans le monde du travail.
        </p>
        <br />
        <h2>L'informatique</h2>
        <h3>1ère année</h3>
        <p>
          A l'année scolaire 2022/2023, j'ai rejoint une école en informatique 
          où j'ai pu apprendre le langage golang durant la piscine. A l'issue de la piscine, 
          de nombreux projets se sont succédés qu'il a fallu coder en Golang:
        </p>
          <ul>
            <li>- le hangman, développé en groupe, en version terminale pour faire nos premiers pas 
              dans le code,</li>
            <li>- le hangman web, développé en groupe spécialement dans le but de nous faire apprendre 
              les bases du web,</li>
            <li>- le groupie tracker, développé en trio, c'est une application avec un design fait 
              avec la librairie Fyne,</li>
            <li>- le forum, développé en groupe pour nous faire apprendre les principes de session, 
              d'utilisateur et de base de données</li>
          </ul>
        <p>
          En milieu d'année, il avait fallu passer par la piscine js pour ensuite réussir le projet de 
          création d'un jeu en Javascript. 
        </p>
        <p>
          De plus, une calculatrice a été codé en Python, simulant une véritable calculette avec un 
          front avec la librairie Tkinter.
        </p>
        <p>
          Pour finir, J'ai aussi eu l'occasion de créer un jeu similaire au jeu "Crossy Road" sur le 
          moteur Unreal Engine où j'avais crée les fenêtres des menus, une parties des mouvements 
          du personnage, le placement des différents éléments dans la scène, tout cela en Blueprints. 
        </p>
        <br />
        <h3>2ère année</h3>
        <p>
          Ma 2ème année s'est passée à l'Université Sorbonne Paris Nord, plus précisément au sein de 
          l'Institut Universitaire de Technologie. Là-bas, j'ai suivi une formation pluridisciplinaire, 
          j'ai ainsi pu assister à des cours pour développer des compétences transversales tel que 
          la gestion de projets, la communication et la compréhension des enjeux éthiques et 
          environnementaux liés à l'informatique, mais aussi des cours d'anglais et de droit afin 
          d'être polyvalent et opérationnel une fois sur le marché du travail. 
        </p>
        <p>
          Ensuite, il y a bien sûr eu des cours de programmation en python, java, web (HTML/CSS/JS), 
          C, prolog, haskell et aussi du PHP. Pour finir, il y avait aussi des cours d'UML, de 
          réseaux et de test.
        </p>
        <p>
          En ce qui concerne les projets informatiques, il y a eu les projets:
          <ul>
            <li>- Analyse de données, développé en Python et les librairies Matplotlib et Numpy,</li>
            <li>- Appli Flutter, développé en Python et les librairies Flask pour le back et Flutter 
              pour le front,</li>
            <li>- Prix Nobels, développé en PHP et le motif d'architecture logicielle MVC.</li>
          </ul>
        </p>
        <p>Pour finir, j'ai réalisé un stage de 2 mois à la fin de l'année.</p>
        <br />
        <h3>3ère année</h3>
        <p>
          L'année scolaire 2024/2025 s'est aussi déroulée à l'IUT, dans la continuité de la 2e année.
        </p>
        <p>
          J'ai pu suivre des cours de base de données non-relationnelles, virtualisation, test 
          automatique, programmation au multimédia, développement algorithmique, qualité de 
          développement et développement avancée pour l'apprentissage de hard skills.
        </p>
        <p>
          Concernant les soft-skills, il y a eu des cours d'initiation au management, anglais, 
          communication, projet personnel et professionnel, droit du numérique et de la propriété 
          intellectuelle, entrepreneuriat.
        </p>
        <p>
          Quant aux projets informatiques, il y a eu les projets:
          <ul>
            <li>- Consulat, développé Python et la librairie Flask,</li>
            <li>- PokeKod, développé en PHP et Javascript,</li>
            <li>- NoSQL, développé en Python et la librairie Matplotlib.</li>
          </ul>
        </p>
        <p>
          <b>A noter que tout ces projets ci-dessus sont détaillés dans la page "Projets".</b>
        </p>
      </div>
    </div>
  );
};
export default ParcoursScolaire;
