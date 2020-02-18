import React from 'react';
import '../EventDetails/EventDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles({
  root: {
    width: "100%",
    border: "solid 2px grey",
   
    
    // change the width to the auto from 345

  },
});

export default function EventDetails() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Event details"
          height="auto"
          image="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
          title="Event details"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Palau de la Música Catalana
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <LocationOnIcon fontSize ="small" color="action"/>C/ Palau de la Música, 4-6, 08003 Barcelona
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <div>
            <div><WatchLaterIcon fontSiz e='small' color='action' /></div>
            <div>18.00 - 20.00</div>
          </div> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"><CategoryIcon />music
          </Typography>
         <div className='meme'><Typography variant="body2" color="textSecondary" component="p">
          <EuroIcon />20 $</Typography></div> 
          <Typography variant="body2" color="textSecondary" component="p"><PublicIcon />www.odod.com</Typography>
         <Typography variant="body2" component="p">
         Event details paragraph
         </Typography>     
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}


//  function EventDetails(){
//      return(
//          <div className='events-details'>
//            <h2 className='title'>Title</h2>
//            <p>startTime endTime</p>
//            <p>placename</p>
//            <p>address</p>
//            <p>description</p>
//            <p>event tipe</p>
//            <p>url</p>
//          </div>
//      )
//  }


/* state = {
    title: "title1",
    description: "lorem ipsum event 1",
    startTime: "08:00",
    endTime: "21:00",
    placeName: "",
    : "12 carrer d'en Roca, 08002 Barcelona",
    distance: "2km",
    eventType : "sport"
url evento: */ 

// export default EventDetails;