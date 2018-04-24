import React, { Component } from 'react';
import { GoogleMap } from 'react-google-maps';
import Places from './Places';

class OuterMap extends Component {
  render(){
    return (
      <GoogleMap
        defaultZoom={8}
        center={{ lat: this.props.center.lat, lng: this.props.center.lng }}
      >
        <Places />
      </GoogleMap>
    )
  }
}

export default OuterMap;
