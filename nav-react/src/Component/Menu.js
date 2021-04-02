import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Menu = () =>{
    return(
        <div>
            <header>Header</header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <main>Home Page</main>
            <footer>Footer</footer>
        </div>
    )
}

export default Menu;
