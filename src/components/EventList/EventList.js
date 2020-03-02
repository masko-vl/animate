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

// const displayCategoryPic = (category) => {
//   {category 
//     ? categoryAvatar(category)
//     : undefinedCategoryAvatar()
//   }
// }


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function EventList(props) {
  const classes = useStyles();

  return (
    props.apiFiltered.length === 0
      ?<p>No result, please choose other filters or date! 8=></p>
//else print the events
      : props.apiFiltered.map((x, i) => 
      <Fragment key={i}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt=""
              height="140"
              image={x.tags_category_es
            ? <img src={categoryAvatar(x.tags_categor_es)} alt={x.tags_categor_es}></img>
            : <img src={undefinedCategoryAvatar()} alt="event"></img>
            }
              title="Contemplative Reptile"
            >
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <EventDetails apiFiltered={x}/>
      </Fragment> 
    )
  )
}






//       //if there's no events in the data, show a message for the user
//       props.apiFiltered.length === 0
//       ? <p>No result, please choose other filters or date! :)</p>
//       //else print the events
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
  