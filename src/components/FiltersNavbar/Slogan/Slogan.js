import React from 'react';
import logo from './../../Header/Logo/Logo.svg';
import Grid from '@material-ui/core/Grid';
import "./slogan.css"

const Slogan = () =>{
    return(
    <Grid   
      container
      direction="column"
      justify="center"
      alignItems="center"> 
      <img alt="animate_logo" className='logo_slogan' 
        height='120vmin' display='flex' width='100%' src={logo} />
      <Grid item xs={12}  ><h2 className='text_slogan' >Descobreix esdeveniments a Catalunya!</h2> </Grid>
    </Grid>)
}

export default Slogan;