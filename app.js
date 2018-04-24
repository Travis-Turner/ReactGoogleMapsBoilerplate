import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import Loader from './components/Loader';

// locationAPI key - KzVSZF09LmnsKvCl7mdT4EhxNrMXocOuPuaexcj7VjXFwNxjExNzMNhyHTBwDEca

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
  //Get user location success.
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
  //Set default location if unable to fetch location.
  onLocateFail (){
    this.setState(() => ({
      located: false,
      loaded: true
    }))
  }
  //User enters ZIP code.
  onManualLocate(zip){
    console.log('success!', zip);
  }
  //Attempt to find user position.
  componentDidMount(){
    alert('hi');
    navigator.geolocation.getCurrentPosition(this.onLocate, this.onLocateFail, {
      timeout: 7000
    });
  }
  // Render the AppContainer or render a loader.
  render(){
    return (
      <div>
        {
          this.state.loaded ?
          <AppContainer
            center={this.state.center}
            located={this.state.located}
            onManualLocate={this.onManualLocate}
          />
        :
        <Loader />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
