import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {eventsssCategories} from '../../../sharedFunctions'

//style from material-ui package, changed the minWith to have the same width as the others inputs
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),/*space between inputs */
    minWidth: 268,
  }
}));

export default function SelectEvent({changeEvent, event2}) {

  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  },[]);

  return (
    <div>
      <FormControl required variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="event" style={{color: 'black'}}>
          Tipus d'esdeveniment :)
        </InputLabel>
        <Select
        /*default properties with material-ui */
          native
          value={event2}/* prop that we pas from filters to */
          onChange={changeEvent} /*function to use in filtersNav.js to pick the value chosen */
          labelWidth={labelWidth}
          
        >
        {eventsssCategories.map((categories, index)=>{
          return <option key={index} value={categories.value}>{categories.name}</option>
        })}

        </Select>
      </FormControl>
      
    </div>
  );
}
