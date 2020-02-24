import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import EuroIcon from '@material-ui/icons/Euro';
import PublicIcon from '@material-ui/icons/Public';
import CategoryIcon from '@material-ui/icons/Category';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "220",
    
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));
// this function replace the ebncdings from the text we recieve from API
const decodeHTMLEntities= (str)=> {
  if(str && typeof str === 'string') {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    str = str.replace(/&nbsp;/g, ' ');
    str = str.replace(/&amp;/g, ' ');
    str =str.replace(/nbsp/g, ' ');
  }

  return str;
}

export default function EventDetails (props) {
  if (props.apiFiltered === undefined){

    props={
      apiFiltered: {
       
      }
    }
  }
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
      <button type="button" onClick={handleOpen}>
        Find more
      </button>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
          <CardMedia
          component="img"
          alt="Event details"
          height ="120"
          image="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
          title="Event details"
        />
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
          {props.apiFiltered['denominaci']}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.apiFiltered['espai']}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <LocationOnIcon fontSize ="small" color="action"/>
          {props.apiFiltered['adre_a']}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <WatchLaterIcon fontSize='small' color='action' />
          {props.apiFiltered['data_inici']}-{props.apiFiltered['data_fi']}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <CategoryIcon />
          {props.apiFiltered['tags_categor_es']}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <EuroIcon />{props.apiFiltered['entrades']}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <PublicIcon />{props.apiFiltered['url']} </Typography>
         <Typography variant="body2" component="p">
         {decodeHTMLEntities(props.apiFiltered['descripcio_html'])}
         </Typography>     
        </CardContent>
          </div>
        </Fade>
      </Modal>
    </div>
  )
};
