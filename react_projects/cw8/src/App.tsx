import { useState, type ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//let info = ' ';


function App() {
  const [info, setInfo] = useState('');
  const [colorRed, setColorRed] = useState<number>(0);
  const [colorGreen, setColorGreen] = useState<number>(0);
  const [colorBlue, setColorBlue] = useState<number>(0);


  function handleChanger(r: ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
    setColorRed(Number(r.target.value));
    //setColorRed(parseInt(e.target.value));
  }
  function handleChangeg(g: ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
    setColorGreen(Number(g.target.value));
    //setColorGreen(parseInt(e.target.value));
  }
  function handleChangeb(b: ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
    setColorBlue(Number(b.target.value));
    //setColorRed(parseInt(e.target.value));
  }

  return (
    <div className='container'>
      <h1>Hello, World!</h1>
      <button onClick={(e) => {
        console.log(e);
        //alert('Kliknięto przycisk!');
        //info = new Date().toLocaleTimeString();
        setInfo(new Date().toLocaleTimeString());
        console.log(info);
      }}
        className='btn btn-primary'>Kliknij</button>
      <hr />
      <p>Tu ma zmienić sie treść po kliknięciu przycisku: {info}</p>
      <hr />
      <label htmlFor="colorRed">Wybierz intensywność czerwonego:</label>
      <input value={colorRed} onChange={(r) => handleChanger(r)} type="range" min="0" max="255" className='form-range' />
      
      <hr />
      <label htmlFor="colorGreen">Wybierz intensywność zielnonego:</label>
      <input value={colorGreen} onChange={(g) => handleChangeg(g)} type="range" min="0" max="255" className='form-range' />
      
      <hr />
      <label htmlFor="colorBlue">Wybierz intensywność niebieskiego:</label>
      <input value={colorBlue} onChange={(b) => handleChangeb(b)} type="range" min="0" max="255" className='form-range' />
      <span>{colorRed}  {colorGreen}  {colorBlue}</span>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px', minWidth: '100px', backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})` }}></div>
    </div>
  )
}

export default App
