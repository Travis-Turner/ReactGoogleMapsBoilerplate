import React, { Component } from 'react';

class LocateForm extends Component {
  render(){
    return (
      <div>
        <form>
          <p>Let&#39;s find some weird places near you:</p>
          <input type="text" placeholder="City" name="City"/>
          <input type="text" placeholder="State" name="State"/>
          <input type="text" placeholder="ZIP" name="Zip"/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LocateForm;
