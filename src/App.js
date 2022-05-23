import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [pizzaCounter, setPizzaCounter] = useState(0);
  
  useEffect(() => {

  },[pizzaCounter])
  return (
    <div className="App">
     <h1>PIZZA TIME</h1>
     <h2>{pizzaCounter}</h2>
     <button onClick={() => {setPizzaCounter(pizzaCounter +1)}}>Pizza</button>
    </div>
  );
}

export default App;
