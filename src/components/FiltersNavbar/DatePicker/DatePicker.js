
import React, { Fragment } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider }from '@material-ui/core/styles';
import teal from "@material-ui/core/colors/teal";


const defaultMaterialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {//cabecera calendario
        backgroundColor: teal["800"],
      },
    },
    MuiPickersDay: {
      /* day: {
        color: teal.A700,
      }, */
     daySelected: {
        backgroundColor: teal["700"],

      }
    }
  },
});
  
const DatePicker = props => {
  //const [selectedDate, handleDateChange] = useState(new Date());
  //console.log(props.dateCut)
   return(
      //package datepicker use, changed from hook version
      <Fragment>
       <MuiThemeProvider theme={defaultMaterialTheme}>
        <KeyboardDatePicker 
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="QUAN?"
          format="MM/dd/yyyy"
          value={props.date2}
          InputAdornmentProps={{ position: "start" }}
          
          onChange={date => props.changeDate(date)}
          maxDate={new Date(props.dateCut)} /*is the date of the last event that it´s pased by api, it's converted in state from App.js this prop */
          minDate={new Date()}
        />
        </MuiThemeProvider>
      </Fragment> 
    
)}

export default DatePicker

      

/* 
const DatePicker = ({changeDate}) => {
const [selectedDate] = useState(new Date());
//console.log(selectedDate)
  return (
    <Fragment>
      <KeyboardDatePicker 
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="WHEN?"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => changeDate(date)}
      />
    </Fragment> 
    );
} */


