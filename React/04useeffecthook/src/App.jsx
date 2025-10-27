import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)
  const [check , setcheck] = useState(true)

 useEffect(()=>{
  setInterval(()=>{
    setCount(prev=>prev+1)
  },1000)

  return function(){
    
  }
 },[check])


  return (
    <>
     
      {/* <MyComponent count={count}/> */}

       <div><h1>{count}</h1>

     <p>Count is : {count}</p>

     <span>my Count is : {count}</span>

      <br />
</div>

     <button >Increase</button>
    </>
  )
}

export default App



// component lifecycle

// iniclise --> mount --> update --> unmount