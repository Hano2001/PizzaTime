import React, { useEffect, useState } from "react";
import Pizzas from "./components/Pizzas";
import Upgrades from "./components/Upgrades";
import { CounterContext } from "./contexts/CounterContext";
import { generationData } from "./data/generationData";
import { upgradesData_Generation } from "./data/upgradesData";
import { Button, Counter, Footer, MainDiv,Container } from "./styling/generalStyling";
import clickerImage from './images/pizza_click.jpeg'

function App() {
  const [pizzaCounter, setPizzaCounter] = useState(0);
  const [generateData, setGenerateData] = useState(generationData);
  const [generationUpgrades,setGenerationUpgrades] = useState(upgradesData_Generation)
  const [click , setClick ] = useState(false);
  const contextValues = {
    pizzaCounter,
    setPizzaCounter,
    generateData,
    setGenerateData,
    generationUpgrades,
    setGenerationUpgrades,
  };
  const animate = () => {
    setClick(true);
    setTimeout(() => setClick(false), 100);
  }

  useEffect(() => {}, [pizzaCounter]);
  return (
    <MainDiv>
      <CounterContext.Provider value={contextValues}>
        <h1>PIZZA TIME</h1>
        <Container>
        <Upgrades />
        <Counter>
          <h2>{pizzaCounter}</h2>
          <img src={clickerImage} height={click ? "120" : "100"}  onClick={() => {
              animate();
              setPizzaCounter(pizzaCounter + 1);
            }}></img>
          {/* <Button
            function="clicker"
            onClick={() => {
              setPizzaCounter(pizzaCounter + 1);
            }}
          >
            Pizza
          </Button> */}
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
