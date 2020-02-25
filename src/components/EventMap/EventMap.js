import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import EventDetails from '../EventDetails/EventDetails'

// format of the date we recieve from API
function convert(e) {
  var date = new Date(e),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day,mnth,date.getFullYear()].join("/");
}
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
      result = "Click to find more"
    };

  }
  return result 
};

const decodeHTMLEntities= (str)=> {
  if(str && typeof str === 'string') {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    str = str.replace(/&nbsp;/g, ' ');
    str = str.replace(/&amp;/g, ' ');
    str =str.replace(/nbsp/g, ' ');
  }

  return str;
}
// .custom-popup .leaflet-popup-tip-container {
//   width:30px;
//   height:15px;
//   }
export default class EventMap extends Component {
  state = {
    lat: 41.5912,
    lng: 1.5209,
    zoom: 8
  }

// in tha state are the coordinates of Catalunya
  render() {
    //  console.log('gfcgycuh', this.props.apiFiltered)
    const position = [this.state.lat, this.state.lng]
    
   //  if the array of the props are empty, to keep the state, only if its filtred render the
    if (this.props.apiFiltered.length ===0){
       this.props.apiFiltered.push({latitud:41.5912, longitud:1.5209})
    };
    
    // used the parseFloat method to convert from string to inter keeping the decimals
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.mapbox.com/styles/v1/ceec/ciyxop55w000h2qo9pqyfyy9w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2VlYyIsImEiOiJjaXl1bWlwZ2QwMW1sMzNxbjMxN3JhdGJlIn0.Y_U5JsNv727e2TqKTJ7gTQ'
              />
              {/* creating a map over the markers, for each markers, that we have declared below, to display a marker on map */}
        {this.props.apiFiltered.map(event => (
        <Marker key={event.codi} position={[parseFloat(event.latitud),parseFloat(event.longitud)]}>
          <Popup>
          <img width='100px' src='https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg' alt='photogategory' />
            <br /><b>{event['denominaci']}</b>
            <br /> {convert(event['data_inici'])}{'-'}{convert(event['data_fi'])}
            <br />{event['horari']}
            <br />{decodeHTMLEntities(event['descripcio'].slice(0, 75) + "...")}
            <br/>{event['entrades'] ? "Price :" + minPrice(event['entrades']): "free"}
            {/* passing the props as the event, to recieve the event details of the pop clicked */}
        <EventDetails apiFiltered={event}>
        </EventDetails>
          </Popup>
        </Marker>
      ))}
      </Map> 
    )
  }
}
