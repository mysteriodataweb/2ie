"use client";

import Fiche from "@/components/fiche";
import "../src/index.css";
import Newsletter from "@/components/newsletter";
export default function Home() {
  const cours = [
    { id: 1, nom: "Algorithmique" },
    { id: 2, nom: "Base de données"},
    { id: 3, nom: "Développement Web" },
  ];

  return (
    <main className="page-container">
      <div className="section photo">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.ioVLtE2eYYG2o5yoC1PFPAHaHa?rs=1&pid=ImgDetMain"
          alt="2ie"
          width={220}
          height={220}
          className="deie"
        />
      </div>

      <div className="section fiche">
        <Fiche
          nom="BIAM"
          prenoms="Alfred"
          genre="Masculin"
          filiere="Informatique"
        />
      </div>

      <div className="section cours">
        <h2>Mes cours</h2>
         
          <ul className="cours-list">
            {cours.map((c) => (
              <li key={c.id} className="cours-item">
                <strong>{c.nom}</strong>
              </li>
            ))}
          </ul>
        
        
      </div>

      <div className="section formulaire">
        <Newsletter />
      </div>
    </main>
  );
}
