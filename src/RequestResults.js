import React, { Component } from 'react';
import './App.css';

class RequestResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <fieldset>
        <label>
          RequestList:
          <ul>{this.props.prayerRequests}</ul>
        </label>
      </fieldset>
    );
  }
}

export default RequestResults;
