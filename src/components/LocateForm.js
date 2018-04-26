import React, { Component } from 'react';

// This component will request user's ZIP code if 
// automatic location fails

class LocateForm extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.props.onManualLocate = this.props.onManualLocate.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onManualLocate(e.target.ZIP.value);
  }
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>Let&#39;s find some weird places near you:</p>
          <input type="text" placeholder="ZIP" name="ZIP"/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LocateForm;
