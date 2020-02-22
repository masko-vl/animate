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
                </Typography>
                {x.descripcio.slice(0, 100) + "..."}<br/>
                {x.data_inici == x.data_fi ? "" : "until " + new Date(x.data_fi.toString()).toString().slice(0, 9) } <br />
                {x.horari.length > 50? x.horari.slice(0, 50) + "[..." : x.horari}<br/>
                {/* for entrades : doing an array of all elements to make one with prices only. once we only have the prices, lloking forthe smallest to display : from + price */}
                {"from " + x.entrades ? x.entrades + "€" : "free"}<br/>  
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
  
