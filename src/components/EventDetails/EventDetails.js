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
    str = str.replace(/amp;/g, ' ');
  }

  return str;
}
 // This function returns the name of the category from the api
// const categoryAvatar = (apiCategory) => {
//   const array = apiCategory.split("/")
//   const category = array[array.length - 1]
//       {/* Choosing image according to the category. All images are registered in "images" and have the name of the list category (as we need to get the category names of the api >> being sure that the filters names don't have been modified !!!*/}
//   return <Avatar alt = {category} src={"../../images/" + category+".jpg"} />
// };
// // returs fro undefind categories
// const undefinedCategory = () => {
//   return <Avatar alt ="event" src="../../images/undefined_category.jpg" />
// }

  //convert string that we resive from calendar picker to yyyy/mm/dd format for api uses
  function convert(e) {
    var date = new Date(e),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear()].join("/");
  }
  

export default function EventDetails (props) {
  // il statemnt that not showing you anything till you get the api call
  if (props.apiFiltered === undefined){
    // console.log('if statement')
    props={
      apiFiltered: {
       
      }
    }
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // console.log('props?', props.apiFiltered)
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
          <Typography variant="body2" color="textSecondary" component="p">
          <CategoryIcon style={{ fontSize: 10 }} />
          {props.apiFiltered['tags_categor_es']}
          {/* {props.apiFiltered ['tags_categor_es'] ? categoryAvatar(props.apiFiltered ['tags_categor_es']) : undefinedCategory()} */}
          </Typography>
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
          </div>
        </Fade>
      </Modal>
    </div>
  )
};
// console.log('gfcgycuh', this.props.apiFiltered)