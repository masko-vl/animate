import React from 'react';
import '../Header/Header.css';
import MapIcon from '@material-ui/icons/Map';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FilterListIcon from '@material-ui/icons/FilterList';
// import Logo from './Logo/Logo.svg'

 const Header= props =>(
    <header className='header'>
        <nav className='header_navigation'>
        <div className='logo'><a href='/'>Animate</a></div>
        {/* <div className='header_logo'>
        <img src={Logo} width="auto" /></div> */}
        <div className='space'/>
        <div className='header_items'>
            <ul>
                <li><button onClick={props.showMap}><MapIcon fontSize ="large" color="action" id="map"/></button></li>
                <li><a href='/'><DateRangeIcon fontSize ="large" color="action"/> </a></li>
                <li><a href='/'><FilterListIcon fontSize ="large" color="action"/> </a></li>
            </ul>
        </div>
        </nav>
    </header>
     );


export default Header;