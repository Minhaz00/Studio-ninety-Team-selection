import React from 'react';
import './Header.css';
//=======================================
//       Header section
//=======================================  
const Header = () => {
    return (
        <div className='header-nav'>
            <nav>
                <a href="/Home">Home</a>
                <a href="/Hire">Hire</a>
                <a href="/About">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <h1><span className='name'>StudioNinety</span> Team selection</h1>
            <h4>Leveraging tech to drive a better IT experience.</h4>
            <p>Total budget: $1 Million</p>
        </div>
    );
};

export default Header;