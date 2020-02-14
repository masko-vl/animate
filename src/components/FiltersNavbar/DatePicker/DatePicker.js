
import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePicker = (props) => {
const [selectedDate, handleDateChange] = useState(new Date());

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
        onChange={date => handleDateChange(date)}
      />
    </Fragment> 
    );
}
export default DatePicker