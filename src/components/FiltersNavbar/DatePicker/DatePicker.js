
import React, { Fragment } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import teal from "@material-ui/core/colors/teal";
const defaultMaterialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: teal["800"],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: teal.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: teal.A700,
      },
      daySelected: {
        backgroundColor: teal["800"],
      },
      dayDisabled: {
        color: teal["100"],
      },
      current: {
        color: teal["900"],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: teal["400"],
      },
    },
  },
});
  
const DatePicker = props => {
  //const [selectedDate, handleDateChange] = useState(new Date());
  //console.log(props.dateCut)
   return(
      //package datepicker use, changed from hook version
      <Fragment>
       <ThemeProvider theme={defaultMaterialTheme}>
        <KeyboardDatePicker 
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="WHEN?"
          format="MM/dd/yyyy"
          value={props.date2}
          InputAdornmentProps={{ position: "start" }}

          onChange={date => props.changeDate(date)}
          maxDate={new Date(props.dateCut)} /*is the date of the last event that it´s pased by api, it's converted in state from App.js this prop */
          minDate={new Date()}
        />
        </ThemeProvider>
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


