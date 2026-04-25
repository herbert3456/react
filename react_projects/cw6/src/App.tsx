import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import First from './components/First.tsx'

type Item = {
  color: string;
  content: string;
}
const items: Item[] = [
  { color: 'blue', content: 'Hello, World!' },
  { color: 'green', content: 'This is the second instance.' },
  { color: 'red', content: 'This is the third instance.' },
  { color: 'purple', content: 'This is the fourth instance.' },
  { color: 'orange', content: 'This is the fifth instance.' },
  { color: 'brown', content: 'This is the sixth instance.' }
];

function App() {


  return (
    <>
      {items.map((item, index) => (
        <First
          key={index}
          content={item.content}
          isUnderLindes={index % 3 === 0}
          myColor={item.color}
        />
      ))}
    </>
  )
}

export default App
