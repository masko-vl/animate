import React from 'react';
import '../Header/Header.css';
import MapIcon from '@material-ui/icons/Map';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FilterListIcon from '@material-ui/icons/FilterList';
import logo from './Logo/logo.svg'

 const Header= props =>(
    <header className='header'>
        <nav className='header_navigation'>
        <img src={logo} className='logo' alt='logo'/>
        {/* <div className='header_logo'>
        </div>width="auto" */}
        <div className='space'/>
        <div className='header_items'>
            <ul>
                <li className='icons' onClick={props.showMap}><MapIcon style={{ fontSize: 30 }} color="black" id="map"/></li>
                <li className='icons' onClick={props.showList}><DateRangeIcon style={{ fontSize: 30 }} color="black"/> </li>
                <li className='icons'><a href='/'><FilterListIcon style={{ fontSize: 30 }} color="black"/> </a></li>
            </ul>
        </div>
        </nav>
    </header>
     );


export default Header;