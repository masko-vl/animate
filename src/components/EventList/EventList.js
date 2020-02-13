import React, {Component} from 'react';
import './EventList.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

class EventList extends Component {
    state = {
        title: "title1",
        description: "lorem ipsum event 1",
        startTime: "08:00",
        endTime: "21:00",
        placeName: "",
        address: "12 carrer d'en Roca, 08002 Barcelona",
        distance: "2km",
        eventType : "sport",
        cardPic:"https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg",
    }

export function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Event 1"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — Small description of the event"}
              {" — Where is it"}<br></br>
              {" — Date and times"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Event 2"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Event 3"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}


// ---------------------------------------------
// --------------------------------------------

// class EventList extends Component {
//     state = {
//         title: "title1",
//         description: "lorem ipsum event 1",
//         startTime: "08:00",
//         endTime: "21:00",
//         placeName: "",
//         address: "12 carrer d'en Roca, 08002 Barcelona",
//         distance: "2km",
//         eventType : "sport",
//         cardPic:"https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg",
//     }

// ---------------------------
    
    // async componentDidMount() {
    //     // exemple :
    //     // const [titleResponse, descriptionResponse, startTimeResponse, endTimeResponse, placeNameResponse, addressResponse, eventTypeResponse, cardPicResponse] = await Promise.all([
    //     //     axios.get(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json`),
    //     //     axios.get(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json`)
    //     //   ]);

    //     this.setState({
    //         title: titleResponse,
    //         description: descriptionResponse,
    //         startTime: startTimeResponse,
    //         endTime: endTimeResponse,
    //         placeName: placeNameResponse,
    //         address: addressResponse,
    //         distance: distanceResponse,
    //         eventType : eventTypeResponse,
    //         cardPic: cardPicResponse
    //     })
    // }
//  ----------------------
//     render (){
//         return(
//             <figure className="EventCard">
//                 <img className="SmallCardPic"
//                     src={this.state.cardPic}
//                     alt={this.state.title} />
//                 <div className="FirstColumnDescription">
//                     <p className="title">{this.state.title}</p>
//                     <p className="description">{this.state.description}</p>
//                     <p className="address">{this.state.address}</p>
//                 </div>
//                 <div className="SecondColumnDescription">
//                     <p className="startTime">{this.state.startTime}</p>
//                     <p className="endTime">{this.state.endTime}</p>
//                     <p className="distance">{this.state.distance}</p>
//                     <a className="eventIcon" src={this.state.eventType}></a>/
//                 </div>
//             </figure>
//         )
//     }
// }

// -----------------------------------------------

//  Exemple EventList


//  const eventsList = [
//     {
//         title: "title1",
//         eventType: "sport",
//         description: "lorem ipsum event 1",
//         openingTimes: [
//             {
//             date1: "01.02",
//             startTime: "14:00",
//             endTime:"21:00"
//             },
//             {
//             date2: "01.02",
//             startTime: "08:00",
//             endTime: "21:00"
//             },
//             {
//             date3: "03.02",
//             startTime: "08:00",
//             endTime: "21:00"
//             }
//         ],
//         placeName: "",
//         address: "12 carrer d'en Roca, 08002 Barcelona",
//         distance: "2km",
//         smallPicture:"https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
//     },
//     {
//         title: "title2",
//         eventType: "music",
//         description: "blablablabla",
//         openingTimes: [
//             {
//                 date1: "23.03",
//                 startTime: "15h",
//                 endTime: "18h",
//             }
//         ],
//         placeName: "Palau Sant Jordi",
//         address: "Passeig Olímpic, s/n, 08004 Barcelona",
//         distance: "60m",
//         smallPicture:"https://cdn02.visitbarcelona.com/files/5445-7632-Imagen/palau-sant-jordi-anella-olimpica-barcelona-pf-c1.jpg"
     }
//  ]



 export default EventList;