import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class EventMap extends Component {
  state = {
    lat: 41.5912,
    lng: 1.5209,
    zoom: 8,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    let markers = [
      [ 41.3814343, 2.169289299999946],
      [41.3814343, 2.2],
      [41.3814343, 2.171]
    ]
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.mapbox.com/styles/v1/ceec/ciyxop55w000h2qo9pqyfyy9w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2VlYyIsImEiOiJjaXl1bWlwZ2QwMW1sMzNxbjMxN3JhdGJlIn0.Y_U5JsNv727e2TqKTJ7gTQ'
              />
      {markers.map(marker => (
        <Marker position={marker}>
          <Popup>
          <img width='120px' src='https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg' />
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}

      </Map>
    )
  }
}
