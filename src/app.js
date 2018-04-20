import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
import Places from './components/Places';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      center: {
        lat: -34.397,
        lng: 150.644
      }
    }
    this.onLocate = this.onLocate.bind(this);
    this.onLocateFail = this.onLocateFail.bind(this);
  }
  //Get user location
  onLocate (pos){
    this.setState(() => ({
      center: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }
    }));
  }
  //Set default location if unable to fetch location
  onLocateFail (){
    this.setState(() => ({
      center: {
        lat: 37.5841051,
        lng: -84.31487899999999
      }
    }))
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.onLocate, this.onLocateFail, {
      timeout: 7000
    });
  }
  render(){
    return (
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyBCckUpffCKRxpvV0Re1aGCCp-qchpoLnU"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={this.state.center}
          position={this.state.center}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
