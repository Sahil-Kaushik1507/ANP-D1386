import React from 'react'
import {NavLink} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
        <nav>
            <NavLink to="/home">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/contact">Contact </NavLink>

        </nav>



    </div>
  )
}
