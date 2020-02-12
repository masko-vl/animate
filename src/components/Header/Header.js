import React from 'react';
import '../Header/Header.css';

 const Header= props =>(
    <header className='header'>
        <nav className='header_navigation'>
        <div></div>
        <div className='header_logo'><a href = "/">LOGO: ANIMATE!</a></div>
        <div className='space'/>
        <div className='header_items'>
            <ul>
                <li><a href='/'>Map</a></li>
                <li><a href='/'>Calendar</a></li>
                <li><a href='/'>Filters</a></li>
            </ul>
        </div>
        </nav>
    </header>
     );
 



export default Header;