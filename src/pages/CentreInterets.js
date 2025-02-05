import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const CentreInterets = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Centre d'intérêts</h1>
        <h2>La littérature</h2>
        <p>
          Depuis la primaire, la littérature a toujours été
          un moyen pour moi de m'évader de la réalité, que je le lisais pour 
          le cours de français où pour mon propre plaisir. Chacun de
          ces livres ont été pour moi intéressants à lire, même si j'en retiendrai que
          certain d'entre eux:
        </p>
        <ul>
          <li>- "Antigone" de Sophocle,</li>
          <li>- "Casse-Noisette",</li>
          <li>- "Je suis une légende" de Richard Matheson,</li>
          <li>- "Cthulhu et autres nouvelles" de H.P. Lovecraft,</li>
          <li>- "Récit fantastiques" de Théophile Gautier.</li>
        </ul>
        <br />
        <h2>Le jeu vidéo</h2>
        <p>
          Tout comme la littérature, les jeux vidéos ont été pour moi et le sont
          toujours, un moyen de voyager dans des mondes parallèles au nôtre. Mes
          jeux préférés sont sans aucune hésitation ceux de l'éditeur et
          développeur Klei, connu pour ses jeux de construction de base, de
          survie, de stratégie/casse-tête, poussant à réfléchir. En plus de cela, 
          j'apprécie tout particulièrement les jeux vidéos de type roguelike, me 
          poussant dans mes retranchements de par la difficulté de ce genre, à 
          réessayer pour au final trouver la stratégie parfaite. 
        </p>
        <br />
        <h2>Le 7e art</h2>
        <p>
          A croire que la réalité m'est ennuyeuse, j'apprécie également regarder des
          œuvre cinématographiques. Le genre de la science-fiction m'attire tout
          le plus. En effet, voir ce que pourrait devenir la société dans un futur proche où 
          lointain suite à un avancé technologique comme dans le film "Bienvenue à Gattaca" 
          me fascine. Où voir comment l'humanité pourrais réagir à l'aube d'une catastrophe 
          naturelle comme dans le film "Don't look up" me rend bouche-bée.
        </p>
        <p>
          Personne n'aimerait une invasion alien comme dans le film "The Thing" de 
          John Carpenter mais beaucoup rêve d'un développement technologique comme 
          dans le film "Ready player One" avec ses casques VR et capteurs haptyques, 
          le film "Bladerunner" avec ses voitures volantes ou encore les film 
          d'animations "Ghost in the shell" avec ses villes futuristes. Mais cela 
          reviendrait à penser qu'aux avantages, qu'aux possibilités que ces changement 
          amenèraient, mais je suis suis d'avis que ce qu'on imagine dans 
          les films/séries/romans/jeux SF devrait y rester à cause de nombreuses 
          conséquences.
        </p>
      </div>
    </div>
  );
};
export default CentreInterets;
