import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import {ListGroup, ListGroupItem, Panel, Alert, Row, Col, Grid, Button} from 'react-bootstrap';
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'Anton',
    year: 1972
  },
  {
    name: 'Andrew',
    year: 2012
  },
  {
    name: 'Anna',
    year: 2012
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);



export default class Example extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a name',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div className="PatientRecords">
        <Grid>
        <Panel header = "Select the patient" bsStyle = "primary" >
          <Row>
          <Alert bsStyle="info">
            <p>To <strong>select a patient </strong> start typing their name</p>
            <p>Select a patient and click "Edit" or click "Add New" to add a new one</p>
          </Alert>
        </Row>
        <Row className="searchAndAdd">
        <Col md={8} sm={8} xs={4}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </Col>
    <Col md={4} sm={4}  xs={8}>
      <NavLink to="/patients/patientData">
    <Button className="patientsBtn" bsStyle="primary">Edit</Button>
      </NavLink>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    <Button className="patientsBtn" bsStyle="success">Add</Button>
    </Col>

    </Row>
  </Panel>
</Grid>
  </div>
    );
  }
}

export class Patients extends Component {
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1>
              Patient Records
              <button type="button" className="btn btn-success addPatient">Add New Patient</button>
            </h1>

          </div>

          <div className="panel-body">

            <div className="row">

              <div className="col">
                <div className="input-group">

                  <input type="text" className="form-control" placeholder="Search for patients..."></input>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </div>

              <div className="row top-buffer">

                <div className="col">

                  <table className="table table-hover table-striped table-bordered">

                    <thead>
                      <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>
                          <NavLink to="/patients/patientData">
                            John
                          </NavLink>
                        </td>
                        <td>Doe</td>
                        <td>john@example.com</td>

                      </tr>

                      <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


 class PatientsPrev extends Component {
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1>
              Patient Records
              <button type="button" className="btn btn-success addPatient">Add New Patient</button>
            </h1>

          </div>

          <div className="panel-body">

            <div className="row">

              <div className="col">
                <div className="input-group">

                  <input type="text" className="form-control" placeholder="Search for patients..."></input>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </div>

              <div className="row top-buffer">

                <div className="col">

                  <table className="table table-hover table-striped table-bordered">

                    <thead>
                      <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>
                          <NavLink to="/patients/patientData">
                            John
                          </NavLink>
                        </td>
                        <td>Doe</td>
                        <td>john@example.com</td>

                      </tr>

                      <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const PatientData = () => (
  <div className="container">
    <h1>Patients Data here</h1>
  </div>

)
