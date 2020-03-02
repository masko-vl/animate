import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "./ButtonForm.css"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor:'#004d40',
    }
  }
}));
   
  export default function ButtonForm({chooseFilters}) {
    const classes = useStyles();
    
    
    return (
      <div className={classes.root} >
        
        <Button variant="outlined"   id={'animate'} onClick={chooseFilters}>
        <span className={'color'}>ANÍMATE!</span>
        </Button>
       </div>
     
    );
  } 
  