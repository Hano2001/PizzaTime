import React, { useContext, useState, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import {
  ItemContainer,
  GenerationMainContainer,
  GenerationImage,
} from "../styling/generationStyling";
import { Button } from "../styling/generalStyling";
import { resetData } from "../data/generationData";

export default function Pizzas({ count }) {
  const { pizzaCounter, setPizzaCounter, generateData, setGenerateData } =
    useContext(CounterContext);
  const [upgradesValue, setUpgradesValue] = useState(0);

  useEffect(() => {
    setUpgradesValue(
      generateData.reduce((a, b) => a + b.amount * b.generate, 0)
    );
  }, [generateData]);

  const oneSecond_MS = 1000;
  useEffect(() => {
    const interval = setInterval(() => {
      setPizzaCounter(
        (pizzaCounter) =>
          pizzaCounter +
          generateData.reduce((a, b) => a + b.amount * b.generate, 0)
      );
    }, oneSecond_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [generateData]);

  function ButtonClick(generate, price, index) {
    setPizzaCounter((pizzaCounter) => pizzaCounter - price);
    let generateArray = [...generateData];
    generateArray[index].amount += 1;
    generateArray[index].price += Math.round(generateArray[index].price * 0.5);

    setGenerateData(generateArray);
  }

  function gameReset() {
    generateData.map((item, index) => {
      item.amount = 0;
      item.price = resetData[index].price;
      return item;
    });
    setPizzaCounter(0);
    setUpgradesValue(0);
  }
  return (
    <div>
      <GenerationMainContainer>
        {generateData.map((item, index) => {
          return (
            <div key={item.id}>
              <ItemContainer>
                <Button
                  function="buy"
                  type="Submit"
                  onClick={() => ButtonClick(item.generate, item.price, index)}
                  disabled={count < item.price ? true : false}
                >
                  Buy({item.price})
                </Button>
                {item.name}: {item.amount}
                <GenerationImage src={require("../images/" + item.imgSrc)} />
              </ItemContainer>
            </div>
          );
        })}
      </GenerationMainContainer>
      <h4>Points/second: {upgradesValue}</h4>
      <Button function="reset" onClick={gameReset}>
        RESET GAME
      </Button>
      <button
        onClick={() => setPizzaCounter((pizzaCounter) => pizzaCounter + 10000)}
      >
        10,000 Pizzas (Cowabunga)
      </button>
    </div>
  );
}
