import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
  },
}));
const citySelect=(value)=>{
  let arrayCities = value.split('/')
  let city = arrayCities[arrayCities.length - 1]
  city = city.replace(/([-])/g," ")
  return city
}

export default function SelectCity({changeCity, valueCities}) {
  const classes = useStyles();
 
  return (

    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Select city</InputLabel>
        <Select defaultValue="" onChange={changeCity} input={<Input id="grouped-select" />}>
        {/* */}
        {!valueCities? <MenuItem value={'barcelona'}>Barcelona</MenuItem>:valueCities.map((cityvalue, index)=>{
            return(<MenuItem key={index} value={cityvalue}>{citySelect(cityvalue)}</MenuItem>)
          }) }      
        </Select>
      </FormControl>
    </div>
  );
}
