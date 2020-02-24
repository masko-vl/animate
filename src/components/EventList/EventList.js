import React, {Fragment} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EventDetails from './../EventDetails/EventDetails.js';
import { render } from '@testing-library/react';
import undefinedEventImage from './../images/undefined_event.jpg'

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

// This function gets the smallest number from a string containing all kinds of characters. We'll use it to return the smallest price of an event, that sets in the api price sentence.
const minPrice = (sentence) => {
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
      result = "Click for more Info"
    };

  }
  return result 
};

// This function returns the name of the category from the api
const categoryAvatar = (apiCategory) => {
  const array = apiCategory.split("/")
  const category = array[array.length - 1]
      {/* Choosing image according to the category. All images are registered in "images" and have the name of the list category (as we need to get the category names of the api >> being sure that the filters names don't have been modified !!!*/}
  return <Avatar alt = {category} src={"./images/" + category+".jpg"} />
};

const undefinedCategory = () => {
  return <Avatar alt ="event" src="./images/undefined_category.jpg" />
}

const EventList = (props) => { 
  render()
    return(
      props.apiFiltered.map(x => 


        // Do we keep this component format?
      <Fragment>
        <List className={useStyles.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
            {/* Choosing image according to the category. All images are registered in "images" and have the name of the list category (as we need to get the category names of the api >> being sure that the filters names don't have been modified !!!*/}
            {/* {x.tags_categor_es ? categoryAvatar(x.tags_categor_es) : undefinedCategory()} */}
            <Avatar alt ="event" src={undefinedEventImage} />
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
                  </Typography>
                  {x.descripcio.slice(0, 100) + "..."}<br/> 
                  {x.data_inici == x.data_fi ? "" : "until " + new Date(x.data_fi.toString()).toString().slice(0, 9)} <br />

                  {x.horari ? x.horari.slice(0, 50) + "[...]" : "Click to get time table"}<br/> 
                  {x.entrades ? "Price :" + minPrice(x.entrades): "free"}<br/>  
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
  
