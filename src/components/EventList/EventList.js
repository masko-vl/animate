// import React, {Fragment} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Typography from '@material-ui/core/Typography';
// import EventDetails from './../EventDetails/EventDetails.js';
// import { render } from '@testing-library/react';
// import Avatar from '@material-ui/core/Avatar';
// import {minPrice, categoryAvatar, undefinedCategoryAvatar} from './../../sharedFunctions.js'


import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {minPrice, categoryAvatar, undefinedCategoryAvatar} from './../../sharedFunctions.js'
import EventDetails from './../EventDetails/EventDetails.js';
import {eventsCategories} from '../images/images.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {changeDateFormat} from '../../sharedFunctions'


 
const displayCategoryPic = (category) => {
  return category 
    ? categoryAvatar(category) 
     : undefinedCategoryAvatar() 
    }
 


const checkDisplayDate = (start, end) => {
  if(start === end) {
    return "until " + new Date(end.toString()).toString().slice(0, 10)
  } else if (start !== undefined ){
  } else {
    return "Click on know More for infos"
  }
}

const checkDisplayOpeningHours = (openingHours) => {
  if ( typeof openingHours !== 'undefined') {
    return openingHours.slice(0, 50) + (openingHours.length > 50 ? "[...]" : "")
  }else {
    return "Click for more details"
}}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function EventList(props) {
  const classes = useStyles();

  return (
    <Fragment className={classes.root}>
    <Grid
      container
      direction="row"
      justify="left"
      alignItems="left"
      justify="space-around"
    >
    {props.apiFiltered.length === 0
      ?<p>No result, please choose other filters or date!</p>
      : props.apiFiltered.map(x =>

      <Grid item xs={10} md={5}>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt=""
              height="140"
              image= {displayCategoryPic(x.tags_categor_es)}
              
            
              title="Event Barcelona"
            >
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="body2" component="p">
              <b>{x.denominaci}</b>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {x.descripcio ? x.descripcio.slice(0, 70) + "..." : "Click here for more information!!" }<br/>
                <b>Dates : </b>{checkDisplayDate(x.data_inici, x.data_fi)}<br />
                <b>Open times : </b>{checkDisplayOpeningHours(x.horari)}<br/> 
                <b>Price : </b>{x.entrades ? "Price :" + minPrice(x.entrades): "free"}<br/>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <EventDetails apiFiltered={x}/>
          </CardActions>
        </Card>
        <br/>
      </Grid>
      )
    }
    </Grid>
  </Fragment> 
    
  )
}








 
//else print the events
//       : props.apiFiltered.map((x, i) => 
//       <Fragment key={i}>
//         <List className={useStyles.root}>
//           <ListItem alignItems="flex-start">
//             <ListItemAvatar>
//             {x.tags_categor_es 
//             ? <Avatar alt="evento animate" src={categoryAvatar(x.tags_categor_es)} />  
//             : <Avatar alt="evento animate" src={undefinedCategoryAvatar()} /> 
//             }
//             </ListItemAvatar>
//             <ListItemText
//               primary={x.denominaci}


//               secondary={
//                 <React.Fragment>
//                   <Typography
//                     component="span"
//                     variant="body2"
//                     className={useStyles.inline}
//                     color="textPrimary"
//                   >
//                   </Typography>
//                   {x.descripcio ? x.descripcio.slice(0, 100) + "..." : "Click here for more information!!" }<br/>
//                   {x.data_inici === x.data_fi ? "" : "until " + new Date(x.data_fi.toString()).toString().slice(0, 9)} <br />
//                   {x.horari ? x.horari.slice(0, 50) + "[...]" : "Click to get time table"}<br/> 
//                   {x.entrades ? "Price :" + minPrice(x.entrades): "free"}<br/>  
//                 </React.Fragment>
//               }
//             />
//           </ListItem>
//         </List>
//         <EventDetails apiFiltered={x}/>
//       </Fragment>  
//     )
//   )
// };
  