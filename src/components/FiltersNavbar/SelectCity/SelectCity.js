import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeItBeautiful } from './../../../sharedFunctions'
import { citySort } from './../../../sharedFunctions'
import { deleteDuplicatedCities } from './../../../sharedFunctions'


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
        <InputLabel htmlFor="grouped-select" style={{color: 'black'}}>Select city</InputLabel>
        <Select className={classes.filled} defaultValue="" onChange={changeCity} input={<Input id="grouped-select" required />}>
          {/*show the city categories */}
          {!valueCities ? <MenuItem value={'barcelona'}>Barcelona</MenuItem> : cityArr.map((city, index) => {
            return (<MenuItem key={index} value={city.value}>{city.displayText}</MenuItem>)

          })}

        </Select>
      </FormControl>
    </div>
  );
}
