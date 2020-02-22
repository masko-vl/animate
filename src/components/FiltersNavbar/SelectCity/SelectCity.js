import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
  },
}));


export default function SelectCity({changeCity, dataApi}) {
  const classes = useStyles();
 
  
  
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Select city</InputLabel>
        <Select defaultValue="" onChange={changeCity} input={<Input id="grouped-select" />}>
        
         
          <MenuItem value={'barcelona'}>Barcelona</MenuItem>
           <MenuItem value={2}>Badalona</MenuItem>
          <MenuItem value={3}>Girona</MenuItem>
          <MenuItem value={4}>Reus</MenuItem> 
        </Select>
      </FormControl>
    </div>
  );
}
