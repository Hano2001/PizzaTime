import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export default function Vesuvio({count}) {
    const {pizzaCounter, setPizzaCounter} = useContext(CounterContext);
    
  return (
    <div>
      <button onClick={() => setPizzaCounter(pizzaCounter => pizzaCounter + 10)} disabled={count<50 ? true : false}>Vesuvio</button>
    </div>
  );
}
