
import React, { Fragment } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

 
  
const DatePicker = props => {
  //console.log(props.dateCut)
   return(
      //package datepicker use, changed from hook version
      <Fragment>
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


