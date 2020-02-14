
import React from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Background from "./BackGround/background1.jpg"
import DatePicker from './DatePicker/DatePicker.js';
import SelectEvent from "./SelectEvent/SelectEvent.js";
import GroupedSelect from "./SelectCity/SelectCity.js";
import ButtonForm from "./ButtonForm/ButtonForm.js"
import Slogan from './Slogan/Slogan'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
}))
const sectionStyle = {
    /* height: '100vh', */
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color:'white',
    
  };

function FiltersNavbar(props) {
    const classes = useStyles();
  return(
      <div className={classes.root} style={ sectionStyle }>
      
    <Grid   
        container
        direction="column"
        justify="center"
        alignItems="center">  
        <Grid item xs={12}><Slogan/></Grid> 
        <Grid item xs={12}><Typography variant="h5" component="h3" color='inherit'>Choose your preferences!</Typography> </Grid>
        <Grid item xs={12}><GroupedSelect/></Grid>
        <Grid item xs={12}><SelectEvent/></Grid>
        <Grid item xs={12}> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker/>
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}><ButtonForm/></Grid>
       
    </Grid>
    </div>
  )
}

export default FiltersNavbar;




