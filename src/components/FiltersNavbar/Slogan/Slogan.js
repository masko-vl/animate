import React from 'react';
import {eventsCategories} from './../../images/images.js';

const sloganStyle = {
    fontFamily:'Tahoma, Geneva, sans-serif',
    fontSize: '5vw',
    
  };
const Slogan = () =>{
    return(
    <div>
        <img alt="animate_logo" src={eventsCategories["logo"]} />
        <h1>Besos</h1>
    </div>
    )
}

export default Slogan;