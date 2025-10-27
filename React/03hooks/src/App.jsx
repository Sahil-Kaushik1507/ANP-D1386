import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count ,setCount] = useState(0)                               

function increse(){
  // count++;
  setCount((prev)=>prev+1);
  setCount((prev)=>prev+2);
  setCount((prev)=>prev+3);
  setCount((prev)=>prev+4);
  setCount((prev)=>prev+5);
  console.log(count)
}

function decrease(){
  // count--;
  setCount(count-1)
  console.log(count)
}


  return (
    <>
    <h3 id='heading'>{count}</h3>


    <p>{count}</p>

    <button onClick={increse}>{count}increase ++</button>
    <button onClick={decrease}>{count}decrease  --</button>



    <span>{count}</span>
    <span>{count}</span>
    <p>{count}</p>
    <span>{count}</span>
    <span>{count}</span>
    </>
  )
}

export default App
