import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

class Places extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: {
        1: {
          lat: 37.5687,
          lng: -84.2963,
        }
      }
    }
  }
  render(){
    return (
      <div>
        <Marker position={{ lat: this.state.locations['1'].lat, lng: this.state.locations['1'].lng }} />
      </div>
    )
  }
}

export default Places;
