import React from 'react';
// import Card from '@material-ui/core/Card';
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
import {categoryAvatar, decodeHTMLEntities, undefinedCategoryAvatar} from './../../sharedFunctions.js'

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
      <Button type="button"  size="small" color="primary" onClick={handleOpen}>
        Know More
      </Button>
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
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Event details"
              width ="120"
              height='120'
              image={props.apiFiltered['tags_categor_es']
              ? categoryAvatar(props.apiFiltered['tags_categor_es'])
              : undefinedCategoryAvatar()
              }
              title="Event details"
            />
            {/* {props.apiFiltered ['tags_categor_es'] ? categoryAvatar(props.apiFiltered ['tags_categor_es']) : undefinedCategoryAvatar()} */}
            <CardContent className={classes.root}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.apiFiltered['denominaci']}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary" component="p">
                {props.apiFiltered['espai']}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <LocationOnIcon style={{ fontSize: 10 }}/>
                {props.apiFiltered['adre_a']}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <WatchLaterIcon style={{ fontSize: 10 }} />
                {convert(props.apiFiltered['data_inici'])}{'-'}{convert(props.apiFiltered['data_fi'])}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p"> */}
              {/* <CategoryIcon style={{ fontSize: 10 }} />
              {props.apiFiltered['tags_categor_es']}
              </Typography> */}
              <Typography variant="body2" color="textSecondary" component="p">
                <EuroIcon style={{ fontSize: 10 }}/>
                {props.apiFiltered['entrades']}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <PublicIcon style={{ fontSize: 10 }} />
                {props.apiFiltered['url']} 
              </Typography>
              <Typography variant="body2" component="p">
                {decodeHTMLEntities(props.apiFiltered['descripcio'])}
              </Typography>   
            </CardContent>
            </CardActionArea>
            <CardActions>
        <Button href={props.apiFiltered['url']} target="_blank" >
          See Event Web Page
        </Button>
        </CardActions>
          </div>
        </Fade>
      </Modal>
    </div>
  )
};