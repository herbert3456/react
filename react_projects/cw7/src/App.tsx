import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Circle from "./components/Circle";
import { items } from "./data/colors"

function App() {
  return (
    <div>
      <h1>Koła</h1>
      {items.map((item, index) => (
        <Circle key={index} color={item.color} radius={item.radius} />
      ))}
    </div>
  );
}

export default App;