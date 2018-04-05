import React, { Component } from 'react';
import './App.css';
import request from './request.js';

class RequestForm extends Component {
  constructor(props) {
    super(props);

    this.requests = this.props.prayerRequests;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { fullname: '',
                   contact: '',
                   prayerrequest: '',
                   requestdate: '',
                   answereddate: '',
                   answered: ''
                 };
  }

  handleNameChange(event) {
    this.setState({fullname: event.target.value});
  }

  handleRequestChange(event) {
    this.setState({prayerrequest: event.target.value});
  }

  handleRequestDate(event) {
    this.setState({requestdate: this.getDate()});
  }

  getDate() {
    return '';
  }

  handleSubmit(event) {
    let arequest = new request(this.state.fullname, this.state.prayerrequest);
    this.requests.push(arequest);
    this.props.handler(event, this.requests);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <fieldset>
      <legend>Prayer Request</legend>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br/>
          <input type="text" name="fullname"
            fullname={this.state.value} onChange={this.handleNameChange}
          />
        </label>
        <br/>
        <label>
          Request:
          <br/>
          <textarea
            id="prayerrequest"
            name="prayerrequest"
            onChange={this.handleRequestChange}
            request={this.state.value}
          />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
      </fieldset>
      </div>
    );
  }
}

export default RequestForm;
