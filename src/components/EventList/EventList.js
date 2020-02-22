import React, {Component, Fragment} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EventDetails from './../EventDetails/EventDetails.js';
import { render } from '@testing-library/react';


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

const EventList = (props) => { 
  render()
    return(
      props.apiFiltered.map(x => 
        
      <Fragment>
      <List className={useStyles.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={x.denominaci}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={useStyles.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {x.descripcio.slice(0, 100) + "..."}
                {x.data_inici + "-" + x.data_fi}<br></br>
                {x.horari}<br></br>
                {x.entrades ? x.entrades : "free"}<br></br>
                {x.horari}<br></br>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
        <EventDetails/>
        </Fragment>  
    )
  )
};

  export default EventList;
  

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
//  ]



