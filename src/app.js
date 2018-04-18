import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
import Places from './components/Places';

class App extends Component {
  render(){
    return (
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyBCckUpffCKRxpvV0Re1aGCCp-qchpoLnU"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
