import React from 'react';
import logo from './../../Header/Logo/Logo.svg';

const Slogan = () =>{
    return(
        
    <div>
        <img alt="animate_logo" className='logo_slogan' 
        height='120vmin' display='flex' width='100%' src={logo} />
      {/* <h2 className='text_slogan' >Discover Catalunyan events!</h2> */}
      </div> 
    
    )
}

export default Slogan;