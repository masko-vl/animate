
import React, { Fragment } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

 
  
const DatePicker = props => (
  //console.log(props.dataApi[999]['data_inici'])
   
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
          maxDate={new Date(props.dateCut)} 
        />
      </Fragment> 
    
)
      

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
export default DatePicker


