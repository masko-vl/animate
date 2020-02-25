import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import EventDetails from './../EventDetails/EventDetails.js';
import { render } from '@testing-library/react';
import {minPrice, categoryAvatar, undefinedCategoryAvatar} from './../../sharedFunctions.js'

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
            {x.tags_categor_es ? categoryAvatar(x.tags_categor_es) : undefinedCategoryAvatar()}
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
  
