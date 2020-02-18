import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
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
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="event">
          Select type of event :)
        </InputLabel>
        <Select
          native
          value={event2}
          onChange={changeEvent}
          labelWidth={labelWidth}
          
        >
          <option value="" />
          <option value={'all'}>ALL EVENTS</option>
          <option value={'festivals-i-mostres'}>FESTIVALS AND MUESTRAS</option>
          <option value={'concerts'}>CONCERTS</option>
          <option value={'exposicions'}>EXPOSITIONS</option>
          <option value={'sardanes'}>SARDANAS</option>
          <option value={'festes'}>PARTIES</option>
          <option value={'teatre'}>THEATRE</option>
          <option value={'infantil'}>KIDS</option>
          <option value={'fires-i-mercats'}>FERIAS Y MERCADOS</option>
          <option value={'rutes-i-visites'}>RUTAS Y VISITAS</option>
          <option value={'dansa'}>DANZA</option>
          <option value={'conferencies'}>CONFERENCIAS</option>
          <option value={'cursos'}>CURSOS</option>
          <option value={'cicles'}>CICLOS</option>
          <option value={'carnavals'}>CARNAVALES</option>
          <option value={'setmana-santa'}>SEMANA SANTA</option>

        </Select>
      </FormControl>
      
    </div>
  );
}
