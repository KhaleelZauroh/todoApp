import React from 'react';
import {NavLink} from 'react-router-dom'
import '../App.css'


const Navbar = () => {
    return (
        <nav>
          <ul className="nav-links">
<NavLink exact to="/" activeStyle={{color:'green'}}>
<li>home</li>

</NavLink>
<NavLink exact activeStyle={{color:'green'}} to="/create">
<li>Create</li>

</NavLink>
<NavLink exact activeStyle={{color:'green'}} to="/completed">
<li>completed</li>

</NavLink>
<NavLink exact activeStyle={{color:'green'}} to="/trash">
<li>trash</li>

</NavLink>
          </ul>  
        </nav>
    );
};




export default Navbar;
