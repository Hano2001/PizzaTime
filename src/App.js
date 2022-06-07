import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Vesuvio from "./components/Vesuvio";
import { CounterContext } from "./contexts/CounterContext";

function App() {
  const [pizzaCounter, setPizzaCounter] = useState(0);
  const contextValues = {pizzaCounter, setPizzaCounter};

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
        <Vesuvio count={pizzaCounter} />
        <button
          onClick={() => {
            setPizzaCounter(0);
          }}
        >
          Reset
        </button>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
