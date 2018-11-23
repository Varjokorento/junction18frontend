import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react'
import {APIKEY} from '../env/key.js';
 
export class MapContainer extends Component {
  render() {
    const style = {
        width: '100%',
        height: '100%'
      }
      
    return (
      <Map google={this.props.google}   initialCenter={{
        lat: 60.1699,
        lng: 24.9384
      }} zoom={14} style={style}>

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
                <h1>What</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (APIKEY) 
})(MapContainer)