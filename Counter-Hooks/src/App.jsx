import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(0);  
 
let increase=()=>
{
  setCounter(counter+1);
}
  return (
    <>
    <h1>{counter}</h1>
     <button onClick={increase}>Count is {counter}</button>

     <footer>{counter}</footer>
    </>
  )
}
//if we are not using the state then we have to use queryselector --> Then innerText etc things

export default App
