import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (  
    <>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
        </li>
            <li className='nav-item'>
            <NavLink className='nav-link' to='/users'>
              Users
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/todos'>
              Todos
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' to='/albums'>
              Albums
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
    );
}
 
export default Navbar;