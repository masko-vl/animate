import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import EventDetails from '../EventDetails/EventDetails'
import {minPrice, categoryAvatar, undefinedCategoryAvatar, decodeHTMLEntities} from './../../sharedFunctions.js'

// format of the date we recieve from API
function convert(e) {
  var date = new Date(e),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day,mnth,date.getFullYear()].join("/");
}

export default class EventMap extends Component {
  // in tha state are the coordinates of Catalunya
  state = {
    lat: parseFloat(this.props.apiFiltered[0].latitud),
    lng: parseFloat(this.props.apiFiltered[0].longitud),
    zoom: 14
  }


  render() {
    //  console.log('gfcgycuh', this.props.apiFiltered)
    const position = [this.state.lat, this.state.lng]
    
   //  if the array of the props are empty, to keep the state, only if its filtred render the
    // if (this.props.apiFiltered.length ===0){
    //    this.props.apiFiltered.push({latitud:41.5912, longitud:1.5209})
    // };
    
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
           <img width='150' height='100'
           src= {event['tags_categor_es'] 
           ? 
            categoryAvatar(event['tags_categor_es']) 
            : undefinedCategoryAvatar()} 
            alt={event['tags_categor_es'] 
            ? 
            categoryAvatar(event['tags_categor_es']) 
            : undefinedCategoryAvatar()}></img>
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
