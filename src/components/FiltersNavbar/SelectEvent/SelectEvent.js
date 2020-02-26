import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//style from material-ui package, changed the minWith to have the same width as the others inputs
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),/*space between inputs */
    minWidth: 250,
  },
}));

export default function SelectEvent({changeEvent, event2}) {

  const classes = useStyles();
  const [state, setState] = React.useState({});

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  });

  return (
    <div>
      <FormControl required variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="event">
          Select type of event :)
        </InputLabel>
        <Select
        /*default properties with material-ui */
          native
          value={event2}/* prop that we pas from filters to */
          onChange={changeEvent} /*function to use in filtersNav.js to pick the value chosen */
          labelWidth={labelWidth}
          
        >
          <option value={'all'}>All events</option>
          <option value={'festivals-i-mostres'}>Festivals</option>
          <option value={'concerts'}>Concerts</option>
          <option value={'exposicions'}>Expositions</option>
          <option value={'sardanes'}>Sardanas</option>
          <option value={'festes'}>Parties</option>
          <option value={'teatre'}>Theater</option>
          <option value={'infantil'}>Kids</option>
          <option value={'fires-i-mercats'}>Feirs and mercats</option>
          <option value={'rutes-i-visites'}>Routes and visits</option>
          <option value={'dansa'}>Dance</option>
          <option value={'conferencies'}>Conferences</option>
          <option value={'cursos'}>Courses</option>
          <option value={'cicles'}>Cycles</option>
          <option value={'carnavals'}>Carnavals</option>
          <option value={'setmana-santa'}>Easter week</option>

        </Select>
      </FormControl>
      
    </div>
  );
}
