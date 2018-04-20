import React, { Component } from 'react';
import { withGoogleMap, withScriptjs } from "react-google-maps";
import OuterMap from './OuterMap';

const Map = withScriptjs(withGoogleMap((props) =>
  <OuterMap center={ props.center }/>
));

export default Map;
