import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import EventDetails from '../EventDetails/EventDetails'



export default class EventMap extends Component {
  state = {
    lat: 41.5912,
    lng: 1.5209,
    zoom: 8,
   //  isOpen: false
  }

//   toggleModal = () => {
//    this.setState({
//      isOpen: !this.state.isOpen
//    });
//  }
// in tha state are the coordinates of Catalunya
  render() {
     console.log('gfcgycuh', this.props.apiFiltered)
    const position = [this.state.lat, this.state.lng]
    
    // in the const position I stored the lng and lat
    // let markers = [
    //   [ 41.3814343, 2.169289299999946],
    //   [41.3814343, 2.2],
    //   [41.3814343, 2.171]
    // ]
   //  if the array of the props are empty, to keep the state, only if its filtred render the
    if (this.props.apiFiltered.length ===0){
       this.props.apiFiltered.push({latitud:41.5912, longitud:1.5209})
    }
    // let a = parseFloat(events[1].longitud);
    // let b = parseFloat(events[1].latitud);
    // used the parseFloat method to convert from string to inter keeping the decimals
   //  let markers= [
   //    [parseFloat(this.props.apiFiltered[0].latitud),parseFloat(this.props.apiFiltered[0].longitud)],
   //    // [events[2].longitud, events[2].latitud],
   //    // [events[3].longitud, events[3].latitud]
   //  ]
   // //  apiFiltered
   //  console.log(markers)
    
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.mapbox.com/styles/v1/ceec/ciyxop55w000h2qo9pqyfyy9w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2VlYyIsImEiOiJjaXl1bWlwZ2QwMW1sMzNxbjMxN3JhdGJlIn0.Y_U5JsNv727e2TqKTJ7gTQ'
              />
              {/* creating a map over the markers, for each markers, that we have declared below, to display a marker on map */}
        {this.props.apiFiltered.map(event => (
        <Marker position={[parseFloat(event.latitud),parseFloat(event.longitud)]}>
          <Popup>
          <img width='120px' src='https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg' />
            <br />{event['denominaci']}<br /> 
        <EventDetails apiFiltered={this.props.apiFiltered} >
        </EventDetails>
          </Popup>
        </Marker>
      ))}
      {/* <EventDetails apiFiltered={this.props.apiFiltered} 
      onClose={this.toggleModal}>
        <div>{this.props.apiFiltered.map(detail => (
          <h1>{detail.espai}</h1>))}</div>
        </EventDetails> */}
      </Map> 
    )
  }
}
