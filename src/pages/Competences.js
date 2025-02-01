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
        <h2>Le Code</h2>
        <p>
          Grâce à ma première année en informatique, j'ai pu apprendre le language de code Golang, Java, Javascript et me
          perfectionner en Python. J
        </p>
        <br />
      </div>
    </div>
  );
};
export default Competences;
