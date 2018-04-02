import React, { Component } from 'react';
import './App.css';
import request from './request.js';

class RequestForm extends Component {
  constructor(props) {
    super(props);

    this.requests = this.props.prayerRequests;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { fullname: '',
                   contact: '',
                   prayerrequest: ''
                 };
  }

  handleNameChange(event) {
    this.setState({fullname: event.target.value});
  }

  handleContactChange(event) {
    this.setState({contact: event.target.value});
  }

  handleRequestChange(event) {
    this.setState({prayerrequest: event.target.value});
  }

  handleSubmit(event) {
    let arequest = new request(this.state.fullname, this.state.prayerrequest, this.state.contact);
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
          ContactInfo:
          <br/>
          <input type="text" name="contact"
            contact={this.state.value} onChange= {this.handleContactChange}
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
