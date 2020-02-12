import React from 'react';
import './FiltersNavbar.css'
 function Navbar(){
     return(
        <div className='containerFiltersNav'>
        <h4>Choose your preferences!</h4> 
        <form action="" className='formFilters'>
            <label>WHERE:</label>
            <select>
                <option>City</option>
                <option>Barcelona</option>
            </select>
            <br></br>
            <label>WHAT TYPE OF EVENT:</label>
            <select>
                <option>Type</option>
                <option>Culture</option>
                <option>Sports</option>
                <option>Art</option>
                <option>Music</option>
            </select>
            <br></br>
            <label>WHEN:</label>
            <input type='date'></input>
            <br></br>
            <button>ANÍMATE!</button>
        </form>
        </div>
     )
 }



export default Navbar;