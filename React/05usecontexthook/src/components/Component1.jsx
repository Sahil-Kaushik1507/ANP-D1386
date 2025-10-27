import React, {useContext} from 'react'
import {CountStore} from '../App'

export default function Component1() {
    const value = useContext(CountStore);
  return (
    <div>Component1:-    
        <span> {value.count}</span>
    </div>
  )
}
