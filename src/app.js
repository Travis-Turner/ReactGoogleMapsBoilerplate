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
        lat: null,
        lng: null
      },
      located: false,
      loaded: false,
      error: null
    }
    this.onLocate = this.onLocate.bind(this);
    this.onLocateFail = this.onLocateFail.bind(this);
    this.onManualLocate = this.onManualLocate.bind(this);
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
    // Deprecated code to fall back to FORM.
    // this.setState(() => ({
    //   located: false,
    //   loaded: true
    // }))
    navigator.geolocation.getCurrentPosition(this.onLocate, this.onLocateFail, {
      timeout: 7000
    });
  }
  //User enters ZIP code - find location with axios.
  // Note that the proper this context is maintained to set state asynchronously
  onManualLocate(zip){
    const self = this;
    const key = 'KzVSZF09LmnsKvCl7mdT4EhxNrMXocOuPuaexcj7VjXFwNxjExNzMNhyHTBwDEca';
    const zipCode = zip;
    fetch(`https://www.zipcodeapi.com/rest/${key}/info.json/${zipCode}/degrees`)
      .then((res) => {
        return res.json();
      })
      .then(({lat, lng}) => {
        self.setState(() => ({
          center: {
            lat,
            lng
          }
        }))
      });
  }
  //Attempt to find user position.
  componentDidMount(){
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
