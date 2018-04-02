import React, { Component } from 'react';
import './App.css';
import RequestForm from './RequestForm.js';
import RequestResults from './RequestResults.js';
import './request.js';

class App extends Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.requestItemsList = [];
    this.state = {
      requests: [],
      date: new Date()};
  }

  handler(e, requestlist) {
    this.setState({
      requests: requestlist
    });
    if (this.state.requests.length > 0) {
      this.requestItemsList = this.state.requests.map((requestItem) =>
        <li key={requestItem.toString}>
          {requestItem.fullname} - {requestItem.prayerrequest}
        </li>
      );
    }

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="RequestFormDiv">
          <RequestForm prayerRequests={this.state.requests}
                       handler = {this.handler}
          />
        </div>
        <div className="RequestListDiv">
          <RequestResults prayerRequests={this.requestItemsList}/>
        </div>
      </div>
    );
  }
}

export default App;
