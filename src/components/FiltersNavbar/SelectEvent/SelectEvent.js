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

export default function SelectEvent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Select type of event :)
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value="" />
          <option value={1}>FESTIVALS AND MUESTRAS</option>
          <option value={2}>CONCERTS</option>
          <option value={3}>SARDANAS</option>
          <option value={4}>PARTIES</option>
          <option value={5}>THEATRE</option>
          <option value={6}>KIDS</option>
          <option value={7}>GIGANTES</option>
          <option value={8}>RUTAS Y VISITAS</option>
          <option value={9}>DANZA</option>
          <option value={10}>CONFERENCIAS</option>
          <option value={11}>CURSOS</option>
          <option value={12}>CICLOS</option>
          <option value={13}>CARNAVALES</option>
        </Select>
      </FormControl>
      
    </div>
  );
}
