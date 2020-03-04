import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeItBeautiful } from './../../../sharedFunctions'
import { citySort } from './../../../sharedFunctions'
import { deleteDuplicatedCities } from './../../../sharedFunctions'

const getList=(cityArr)=>{
  {/* <MenuItem value={'barcelona'}>Barcelona</MenuItem> 
  <MenuItem value={'barcelona'}>Girona</MenuItem> 
  <MenuItem value={'barcelona'}>Tarragona</MenuItem>  */}
  cityArr.map((city, index) => {
    return (<MenuItem key={index} value={city.value}>{city.displayText}</MenuItem>)

  })
}
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 268,
  },
  filled:{
    border:'2 px solid #004d40'
  }
}))

const citySelect = (value) => {
  let arrayCities = value.split('/')
  let city = arrayCities[arrayCities.length - 1]
  city = city.replace(/([-])/g, " ")

  return city
}

export default function SelectCity({ changeCity, valueCities }) {
  const classes = useStyles();
  let cityArr = [];

  if (valueCities) {
    cityArr = valueCities.map(city => {
      return (
        {
          value: city,
          displayText: makeItBeautiful(citySelect(city).charAt(0).toUpperCase() + citySelect(city).slice(1))
        }
      );
    })
    cityArr = deleteDuplicatedCities(cityArr, 'displayText') //call the function with our city array and the key name we need
    cityArr.sort(citySort('displayText'))
  }

  return (

    <div>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="grouped-select" style={{color: 'black'}}>Selecciona ciutat</InputLabel>
        <Select className={classes.filled} defaultValue="" onChange={changeCity} input={<Input id="grouped-select" required />}>
          {/*show the city categories */}
          <MenuItem style={{fontWeight:'bold'}} value={'agenda:ubicacions/barcelona/barcelones/barcelona'}>Barcelona</MenuItem>
          <MenuItem style={{fontWeight:'bold'}} value={"agenda:ubicacions/girona/girones/girona"}>Girona</MenuItem>
          <MenuItem style={{fontWeight:'bold'}} value={"agenda:ubicacions/tarragona/tarragones/tarragona"}>Tarragona</MenuItem>
          <MenuItem style={{fontWeight:'bold'}} value={'agenda:ubicacions/lleida/segria/lleida'}>Lleida</MenuItem>
          <hr></hr>
          {!valueCities 
          ? <MenuItem value={'barcelona'}>Barcelona</MenuItem> 
          :cityArr.map((city, index) => {
          
    return (<MenuItem key={index} value={city.value}>{city.displayText}</MenuItem>)

  })}

        </Select>
      </FormControl>
    </div>
  );
}
