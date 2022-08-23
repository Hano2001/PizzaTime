import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Pizzas from "./components/Pizzas";
import { CounterContext } from "./contexts/CounterContext";
import { UpgradesData } from "./data/UpgradesData";

function App() {
  const [pizzaCounter, setPizzaCounter] = useState(0);
  const [upgradesData, setupgradesData] = useState(UpgradesData);
  const contextValues = {
    pizzaCounter,
    setPizzaCounter, 
    upgradesData,
    setupgradesData,
  };

 

  useEffect(() => {}, [pizzaCounter]);
  return (
    <div className="App">
      <CounterContext.Provider value={contextValues}>
        <h1>PIZZA TIME</h1>
        <h2>{pizzaCounter}</h2>
        <button
          onClick={() => {
            setPizzaCounter(pizzaCounter + 1);
          }}
        >
          Pizza
        </button>
        <Pizzas count={pizzaCounter} />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
