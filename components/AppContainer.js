import React, { Component } from 'react';
import LocateForm from './LocateForm';
import Map from './Map';

class AppContainer extends Component {
  render(){
    return (
      <div>
        {
          this.props.located ?
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyBCckUpffCKRxpvV0Re1aGCCp-qchpoLnU"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={this.props.center}
            position={this.props.center}
          />
          :
          <LocateForm onManualLocate={this.props.onManualLocate}/>
        }
      </div>
    )
  }
}

export default AppContainer;
