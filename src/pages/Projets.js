import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";
import { useState } from "react";

const Projets = () => {
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const hangmanWebProj = () => {
    setText(
      "Projet de groupe, développé en golang, l'objectif était de montrer ce qui avait été retenu de la piscine et de nous faire apprendre le HTML/CSS, toutes les fonctionnalités d'un vrai pendule ont été codées telle que la possibilité de rentrer une lettre, ou encore le dessin du pendule quand-on rentre une mauvaise lettre."
    );
    setImage("./IMG/HangmanWeb.png");
  };

  const groupieProj = () => {
    setText(
      "Projet de groupe, développé en golang et la librairie Fyne, pour réussir le projet, il fallait récupérer un fichier de type json disponible sur le net qui donnait un descriptif de groupe de chanteurs/se tel que le nom du groupe, la date de création ou encore les membres."
    );
    setImage("./IMG/Groupie.png");
  };

  const gameJs = () => {
    setText(
      "Projet solo, développé en javascript pure, il y a une amination des coins, une animations du personnage que l'on contrôle, on le voit marche quand-t-il marche vers la gauche ou vers la droite, une animation pour quand-t-il saute ou tombe. Il y a une condition de victoire et de défaite."
    );
    setImage("./IMG/JeuJs.png");
  };

  const forum = () => {
    setText(
      "Projet de groupe, développé en golang et GSAP pour le JS, la possibilité de visualiser le site et pas plus s'il n'y a pas eu de connexion, un utilisateur identifié peut poster, laisser un commentaires sur un post, liker ou disliker, avec des animations en js. Une base de données en Sqlite a été créée pour contenir les posts, les utilisateurs."
    );
    setImage("./IMG/Forum.png");
  };

  const calculatrice = () => {
    setText(
      "Projet solo, développé en python et la librairie tkinter, l'interface est faite pour qu'elle ressemble à une vraie calculatrice, les boutons visibles en bas sont cliquables avec la souris, il est possible de lancer des additions, soustractions, multiplications et divisions, tout cela, dans des calculs avec beaucoup de opérateurs."
    );
    setImage("./IMG/Calculatrice.png");
  };
  const dataAnalysis = () => {
    setText(
      " Projet en binôme, développé en Python et d'analyse de données où il fallait étudier les candidatures des étudiants pour l'une des formations de l'IUT. Pour cela, nous avions un fichier Excel fourni par le professeur contenant des données sur les étudiants(notes, avis, établissement de provenance...)."
    );
    setImage("./IMG/SAEData.PNG");
  };
  const flutterApp = () => {
    setText(
      "un projet de création d'une appli de calendrier où l'on voit un calendrier avec les tâches de chaque journée et un descriptif de la tâche si l'on appuie dessus. Une base de données avait été crée pour contenir les tâches et leurs descriptifs."
    );
    setImage("./IMG/FlutterApp.PNG");
  };
  const pokeKoD = () => {
    setText(
      "Création d'une application web permettant de recenser les plus de 1000 pokémons de la célèbre franchise de manga/animé/jeu vidéo Pokémon."
    );
    setImage("./IMG/PokeKoD.png");
  };
  const podcast = () => {
    setText(
      "Création d'un podcast avec 4 de mes camarades, avec comme sujet l'IA va-t-elle remplacer l'homme dans le développement informatique ? Contenu disponible ici : https://www.youtube.com/watch?v=LFkX7aT4smk"
    );
    setImage("./IMG/Podcast.PNG");
  };
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Mes projets</h1>
        <p>
          Cette partie a pour but de parler de mes projets de code auxquels j'ai
          été impliqué. Il présentera les projets brèvement cités la partie
          Compétences par ordre chronologique, le rôle que j'ai eu dans chacun,
          le tout avec une image présentant chacun des projets.
        </p>
        <br />
        <div className="navBarProj">
          <div onClick={podcast}>
            <li>Podcast</li>
          </div>
          <div onClick={pokeKoD}>
            <li>PokéKoD</li>
          </div>
          <div onClick={flutterApp}>
            <li>Appli Flutter</li>
          </div>
          <div onClick={dataAnalysis}>
            <li>Analyse de données</li>
          </div>
          <div onClick={calculatrice}>
            <li>Calculatrice</li>
          </div>
          <div onClick={forum}>
            <li>Forum</li>
          </div>
          <div onClick={gameJs}>
            <li>Jeu js</li>
          </div>
          <div onClick={groupieProj}>
            <li>Groupie tracker</li>
          </div>
          <div onClick={hangmanWebProj}>
            <li>Hangman web</li>
          </div>
        </div>
        <div className="projet">
          <ul>{text}</ul>
          <img src={image} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Projets;
