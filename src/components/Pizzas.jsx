import React, { useContext, useState, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { ItemDiv, UpgradeDiv } from "../styling/upgrades";
import { Button } from "../styling/general";
import { resetData } from "../data/UpgradesData";

export default function Pizzas({ count }) {
  const { pizzaCounter, setPizzaCounter, upgradesData, setupgradesData } =
    useContext(CounterContext);
  const [upgradesValue, setUpgradesValue] = useState(0);

  useEffect(() => {
    setUpgradesValue(
      upgradesData.reduce((a, b) => a + b.amount * b.generate, 0)
    );
  }, [upgradesData]);

  const TenSeconds_MS = 1000;
  useEffect(() => {
    const interval = setInterval(() => {
      setPizzaCounter(
        (pizzaCounter) =>
          pizzaCounter +
          upgradesData.reduce((a, b) => a + b.amount * b.generate, 0)
      );
    }, TenSeconds_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [upgradesData]);

  function ButtonClick(generate, price, index) {
    setPizzaCounter((pizzaCounter) => pizzaCounter - price);
    let pizzaArray = [...upgradesData];
    pizzaArray[index].amount += 1;
    pizzaArray[index].price += Math.round(pizzaArray[index].price * 0.5);

    setupgradesData(pizzaArray);
  }

  function gameReset() {
    upgradesData.map((item, index) => {
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
      <UpgradeDiv>
        {upgradesData.map((item, index) => {
          return (
            <>
              <ItemDiv>
                {item.name}: {item.amount}
                <Button
                  function="upgrade"
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
      </UpgradeDiv>
      <button onClick={() => console.log(resetData)}>test</button>
      <Button function="reset" onClick={gameReset}>
        RESET GAME
      </Button>
    </div>
  );
}
