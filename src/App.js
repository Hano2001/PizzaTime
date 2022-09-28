import React, { useEffect, useState } from "react";
import Pizzas from "./components/Pizzas";
import Upgrades from "./components/Upgrades";
import { CounterContext } from "./contexts/CounterContext";
import { generationData } from "./data/generationData";
import { Button, Counter, Footer, MainDiv,Container } from "./styling/generalStyling";

function App() {
  const [pizzaCounter, setPizzaCounter] = useState(0);
  const [generateData, setGenerateData] = useState(generationData);
  const contextValues = {
    pizzaCounter,
    setPizzaCounter,
    generateData,
    setGenerateData,
  };

  useEffect(() => {}, [pizzaCounter]);
  return (
    <MainDiv>
      <CounterContext.Provider value={contextValues}>
        <h1>PIZZA TIME</h1>
        <Container>
        <Upgrades />
        <Counter>
          <h2>{pizzaCounter}</h2>
          <Button
            function="clicker"
            onClick={() => {
              setPizzaCounter(pizzaCounter + 1);
            }}
          >
            Pizza
          </Button>
        </Counter>
        <Pizzas count={pizzaCounter} />

        </Container>
      </CounterContext.Provider>
      <Footer>
        <a href="https://github.com/Hano2001" target="_blank">
          The creators GitHub
        </a>
      </Footer>
      
    </MainDiv>
  );
}

export default App;
