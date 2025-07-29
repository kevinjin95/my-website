import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const Info = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <div className="Info">
          <p>
            Si vous êtes arrivé jusque-là de mon site, peut-être que c'est un signe, 
            depuis peu, je suis diplômé d'un BUT en informatique et actuellement, je 
            suis à la recherche de mon 1er emploi dans l'informatique, si mon profil 
            vous intéresse, je vous invite à me recontacter à ce numéro suivant: 06 95 40 38 19, 
            ou encore à m'adresser un mail à l'adresse suivante: kevin.jin@lilo.org.
          </p>
          <p>
            Merci pour votre visite et à bientôt ! 
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default Info;
