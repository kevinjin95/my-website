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
          Diplômé d'un BAC électrotechnique en 2015, et d'un BTS CRSA en 2017,
          ces 2 diplômes m'ont permis d'acquérir des connaissances en
          électrotechnique, ses dangers et ses utilisations. Je me suis ensuite
          lancé dans le monde du travail, où j'ai pu être monteur mécanique,
          poste où il faut savoir manipuler vis et tournevis, pendant un CDD de
          3 mois à partir de décembre 2017.
        </p>
        <br />
        <h2>L'informatique</h2>
        <h3>1ère année</h3>
        <p>
          A l'année scolaire 2022/2023, j'ai rejoint une école en informatique 
          où j'ai pu apprendre le langage golang durant la piscine.
          à l'issue de la piscine, de nombreux projets se sont succédés qu'il a fallu coder en Golang:
        </p>
          <ul>
            <li>- le hangman en version terminale pour faire nos premiers pas dans le code,</li>
            <li>- le hangman web, spécialement dans un soucis de nous faire apprendre le web,</li>
            <li>- le groupie tracker, application avec un front avec la librairie fyne, cette appli permettait de référencer 
              des groupes de chanteurs à partir de données récupérées d'un fichier json,</li>
            <li>- le forum, regroupant des posts d'utilisateurs sur le 7e art, nécéssitant l'action de se connecter
              pour poster, commenter un post, ou encore pour pouvoir liker et disliker, le tout avec des animations en js. 
              Une base de données en Sqlite avait été crée pour stocker les infrmations des utilisateurs et ceux de leur posts</li>
          </ul>
        <p>
          En milieu d'année, il avait fallu passer par la piscine js pour ensuite réussir le challenge js où il fallait créer
          un jeu en javascript. 
        </p>
        <p>
          De plus, une calculatrice a été codé en Python, simulant une véritable calculette avec un front en Tkinter.
        </p>
        <p>
          Pour finir, J'ai aussi eu l'occasion de créer un jeu similaire au jeu "Crossy Road" sur le moteur Unreal Engine où 
          j'avais crée les fenêtres des menus, une parties des mouvements du personnage, tout cela en Blueprints.
        </p>
        <br />
        <h3>2ère année</h3>
        <p>
          Ma 2ème année s'est passée à l'Uviversité Sorbonne Paris Nord, au sein de l'IUT. Là-bas, j'ai suivi une formation 
          pluridisciplinaire, j'ai ainsi pu assister à des cours pour développer des compétences transversales tel que la gestion de projets, 
          la communication, et compréhension des enjeux éthiques et environnementaux liés à l'informatique, mais aussi des cours d'anglais, 
          de droit afin d'être polyvalent et opérationnel une fois sur le marché du travail.
        </p>
        <p>
          Ensuite, il y a bien sûr eu des cours de programmation en python, java, web (html/CSS/JS), C, prolog, haskell et aussi du PHP. 
          Il y avait aussi des cours d'UML, réseaux et test.
        </p>
        <p>
          En ce qui concerne les projets, ...
        </p>
        <h3>3ère année</h3>
        <p>
          A l'année scolaire 2022/2023, j'ai rejoint une école en informatique
          où j'ai pu apprendre le language de code Golang, Java, Javascript, me
          perfectionner en Python puisque je connaissais déjà ce language par
          autodidacte lors de mon entrée dans mon école.
        </p>
      </div>
    </div>
  );
};
export default ParcoursScolaire;
