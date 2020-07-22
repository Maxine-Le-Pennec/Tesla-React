import React, { useState } from "react";
import Car from "./components/Car";
import Color from "./components/Color";

import "./App.css";

function App() {
  const [choice1, setChoice1] = useState(90700);
  const [choice2, setChoice2] = useState(0);

  return (
    <div className="container">
      <h1>Tesla Config</h1>

      <body>
        <section className="choixVehicule">
          <div>
            <h2>Sélectionnez votre véhicule</h2>
          </div>
          <div className="buttonVehi">
            <Car choice={choice1} setChoice={setChoice1}></Car>
          </div>
        </section>

        <section className="choixColor">
          <div>
            <h2>Sélectionnez la couleur</h2>
          </div>
          <div className="buttonVehi">
            <Color choice={choice2} setChoice={setChoice2}></Color>
          </div>
        </section>
        <div className="calculator">
          <span className="result">{choice1 + choice2} €</span>
          <span>
            <button
              className="buy"
              onClick={() => {
                alert("Merci pour ce GROS achat Alexis");
              }}
            >
              Buy!
            </button>
          </span>
        </div>
      </body>
    </div>
  );
}

export default App;
