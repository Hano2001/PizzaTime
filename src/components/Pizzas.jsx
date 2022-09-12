import React, { useContext, useState, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { ItemDiv, GenerationPropsDiv } from "../styling/generationStyling";
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

  const TenSeconds_MS = 1000;
  useEffect(() => {
    const interval = setInterval(() => {
      setPizzaCounter(
        (pizzaCounter) =>
          pizzaCounter +
          generateData.reduce((a, b) => a + b.amount * b.generate, 0)
      );
    }, TenSeconds_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [generateData]);

  function ButtonClick(generate, price, index) {
    setPizzaCounter((pizzaCounter) => pizzaCounter - price);
    let pizzaArray = [...generateData];
    pizzaArray[index].amount += 1;
    pizzaArray[index].price += Math.round(pizzaArray[index].price * 0.5);

    setGenerateData(pizzaArray);
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
      <h4>Points/second: {upgradesValue}</h4>
      <GenerationPropsDiv>
        {generateData.map((item, index) => {
          return (
            <>
              <ItemDiv>
                {item.name}: {item.amount}
                <Button
                  function="buy"
                  type="Submit"
                  onClick={() => ButtonClick(item.generate, item.price, index)}
                  disabled={count < item.price ? true : false}
                >
                  Buy({item.price})
                </Button>
              </ItemDiv>
            </>
          );
        })}
      </GenerationPropsDiv>
      <Button function="reset" onClick={gameReset}>
        RESET GAME
      </Button>
    </div>
  );
}
