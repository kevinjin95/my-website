import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const ParcoursProfessionnel = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Parcours professionnel</h1>
        <h2>Société Mtair</h2>
        <p>
          En avril 2018, j'ai rejoint une société dans le BTP en tant qu'intérimaire pour une durée de 
          5 mois puis en CDI pour une durée total de 4 ans dans cette entreprise basée dans le Val-d'Oise. 
        </p>
        <p>
          J'y avait pour mission de faire l'analyse fonctionnelle, la programmation, la mise en service et 
          les tests d'équipements de régulation automatique du Chauffage, Ventilation, Climatisation(CVC) 
          des bureaux, écoles, entrepôts.
        </p>
        <br />
        <h2>Reconversion</h2>
        <p>
          Durant ma période de collaboration dans cette société du bâtiment, je me suis rendu compte que 
          l'environnement de travail quand on travaille dans le BTP (bruit, poussière, température...)
          étaient des contraintes auxquelles je ne pourrais m'habituer. C'est pourquoi, j'ai arrêté d'être 
          salarié de cette société en juillet 2022.
        </p>
        <br />
        <h3>2e année en informatique - stagiaire testeur logiciel à Ekinops</h3>
        <p>
          Dans le cadre de ma 2e année en informatique, j'ai dû réaliser un stage en fin d'année scolaire,
          c'est une société qui fabrique des routeurs de virtualisation et autre équipements pour une 
          télécommunication fluide et puissante qui m'a accueilli durant 2 mois. 
        </p>
        <p>
          Ainsi, j'ai développé sur l'environnement de test Jenkins pour lancer un second build reprenant 
          les tests échoués du 1e build de la nuit, permettant aux testeurs de gagner beaucoup de temps.
        </p>
        <br />
        <h3>3e année en informatique - stagiaire R&D Engineer à Ekinops</h3>
        <p>
          J'ai réalisé mon stage de 3e année dans la société où j'avais déjà réalisé mon stage de 2e année. 
          L'objectif de ce stage a été de développer un outil du service auquel j'étais rattaché, qui est un 
          serveur Jenkins. Ce serveur était à destination des développeurs, leur donnant plus d'autonomie 
          dans les tests de leurs codes. Mais ne venant pas du domaine du tests, la plateforme devait donc 
          s'adapter à leurs connaissances et non l'inverse, c'est pourquoi, la plateforme a été simplifié, 
          avec cette plateforme, ils ne pouvaient qu'éxecuter que des tests simples. 
          Ainsi, mes missions ont été de :
          <ul>
            <li>- factoriser du code Python 2.7 pour l'adapter à une version plus à jour, ces codes python 
              sont en réalité des tests permettant de valider le bon fonctionnement des versions de logiciel 
              codé par les développeurs</li>
            <li>- configurer la plateforme de tests Jenkins, créer les utilisateurs, créer les pages, les 
              permissions, les jobs...</li>
            <li>- intégrer de nouveaux équipements dans les setups du serveur Jenkins permettant ainsi aux 
              développeurs de tester leurs versions sur une plus large gamme de produits.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default ParcoursProfessionnel;
