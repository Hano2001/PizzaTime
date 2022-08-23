import React, { useContext, useState, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";

export default function Pizzas({ count }) {
  const { pizzaCounter, setPizzaCounter, upgradesData, setupgradesData } =
    useContext(CounterContext);

  const TenSeconds_MS = 1000;
  useEffect(() => {
    const interval = setInterval(() => {
      // let amount = 0;
      // upgradesData.map((pizza, key) => {
      //   if (pizza.amount > 0) {
      //     amount += pizza.amount * pizza.generate;
          
          
      //   }
      // });
      //setPizzaCounter(pizzaCounter + amount);
    }, TenSeconds_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  function ButtonClick(generate, price, index) {
    setPizzaCounter((pizzaCounter) => pizzaCounter - price);
    let pizzaArray = [...upgradesData];
    pizzaArray[index].amount += 1; 

    setupgradesData(pizzaArray);
  }
  return (
    <div>
      <button onClick={() => console.log(upgradesData)}>TEST</button>
      {upgradesData.map((pizza, index) => {
        return (
          <div>
            <button
              type="Submit"
              onClick={() => ButtonClick(pizza.generate, pizza.price, index)}
              disabled={count < pizza.price ? true : false}
            >
              {pizza.name}
            </button>
          </div>
        );
      })}
      <ul>
        {upgradesData.map((pizza, index) => {
          return (
            <>
              {pizza.name}: {pizza.amount}
              <br />
            </>
          );
        })}
      </ul>
      <button onClick={() => console.log(pizzaCounter)}>Check counter</button>
    </div>
  );
}
