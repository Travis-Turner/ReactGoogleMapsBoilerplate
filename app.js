import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import Loader from './components/Loader';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      located: false,
      loaded: false
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
      },
      located: true,
      loaded: true
    }));
  }
  //Set default location if unable to fetch location
  onLocateFail (){
    this.setState(() => ({
      located: false,
      loaded: true
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
        {
          this.state.loaded ?
          <AppContainer
            center={this.state.center}
            located={this.state.located}
          />
        :
        <Loader />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
