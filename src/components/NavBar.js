import React from 'react';
import '../App.css';

const NavBar = () => {
    
    return (
        <div>
            <div class="navbar">
                <div class="logo">
                <a href="#home">UserCardGrid</a>
                </div>
            </div>
            <input className="search-box" placeholder="Search.."/>
        </div>
    );
}

export default NavBar;
