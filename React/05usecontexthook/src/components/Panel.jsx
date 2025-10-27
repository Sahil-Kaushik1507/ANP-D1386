import React,{useContext} from 'react'
import Component1 from './Component1'
import { CountStore } from '../App'

export default function Panel() {
    const {count, setCount} = useContext(CountStore); 
  return (
    <>
    <div>Panel</div>
    <button onClick={() => setCount((count) => count + 1)}> 
        my btn </button>
    <Component1 />
    </>
  )
}
