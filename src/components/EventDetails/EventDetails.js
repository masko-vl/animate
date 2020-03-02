import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import EuroIcon from '@material-ui/icons/Euro';
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../EventDetails/EventDetails.css'
import {categoryAvatar, decodeHTMLEntities, undefinedCategoryAvatar} from './../../sharedFunctions.js'

const useStyles = makeStyles(theme => ({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'scroll',
    height:'85%',
    width:'85%',
    margin: '0 auto',
    marginTop: '5%',
    outline: 0,
    dysplay: 'block'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #004d40',
    padding: theme.spacing(1, 2, 2),
    
  },
 color: {
    color: "white"+"!important"
  },
 button:{
    backgroundColor: "#004d40" 
  },
card :{
    height:'250px'
  },
}));
export const minPrice = (sentence) => {
  const array = sentence.split(" ")
  const numbersArray = []
  let result = ""
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(Number(array[i])) == true) {
      numbersArray.push(Number(array[i]));
    }  
    if (numbersArray.length > 0) {
      result = " from " + Math.min(...numbersArray) + "€"
    } else {
      result = "Check event's page for more Info"
    };
  }
  return result 
};
  function convert(e) {
    var date = new Date(e),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear()].join("/");
  }
export default function EventDetails (props) {
 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button className={classes.button} type="button" onClick={handleOpen}>
        <span className ={classes.color}>Més detalls</span> 
      </Button>  
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,   
        }}
       >
        <Fade in={open}>
          <div className={classes.paper}>
          <CardActionArea className={classes.root}>
            <CardMedia
              className={classes.card}
              component="img"
              alt="Event details"
              image={props.apiFiltered['tags_categor_es'] 
              ? 
              categoryAvatar(props.apiFiltered['tags_categor_es']): undefinedCategoryAvatar()}
              title="Event details"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.apiFiltered['denominaci']}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary" component="p">
                {props.apiFiltered['espai']}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <LocationOnIcon style={{ fontSize: 11 }}/>
                {props.apiFiltered['adre_a']}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <WatchLaterIcon style={{ fontSize: 11 }} />
                {convert(props.apiFiltered['data_inici'])}{'-'}{convert(props.apiFiltered['data_fi'])}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <EuroIcon style={{ fontSize: 11 }}/>
                {props.apiFiltered['entrades'] ? "Price :" + minPrice(props.apiFiltered['entrades']): "free"}
              </Typography>
              <Typography variant="body2" component="p">
                {decodeHTMLEntities(props.apiFiltered['descripcio'])}
              </Typography>   
            </CardContent>
            </CardActionArea>
            <CardActions>
        <Button className={classes.button} href={props.apiFiltered['url']} target="_blank" >
         <span className ={classes.color}>Mira el lloc oficial</span> 
        </Button>
        </CardActions>
          </div>
        </Fade>
      </Modal>
    </div>
  )
};