import React from 'react';
import Home from './Home';
import './Nav.css';

function Nav() {
    return (
        <div className="Nav-container">
            <nav className='Nav-bar'>
                <ul className='Nav-list'>
                    <li className=''><h1 className='Nav-title'>Restroom Finder</h1></li>
                    <li className='Nav-item'>Home</li>
                    <li className='Nav-item'>Find Restroom</li>
                    <li className='Nav-item'>About Us</li>
                    <li className='Nav-item'>Contact Us</li>
                    <li className='Nav-item'>Account</li>
                </ul>
            </nav>

            <Home />

        </div>

    );
}

export default Nav;
