/* global _ */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import {ListGroup, Table, ListGroupItem, Panel, Alert, Row, Col, Grid, Button} from 'react-bootstrap';
import debounce from 'lodash';
import Spinner from 'react-spinkit'
import request from 'superagent'
import WinLiveLogin, {Auth} from '../containers/winLiveLogin.js'





// Imagine you have a list of names that you'd like to autosuggest.
const patients = [
  {
    name: 'Anton',
    surname: 'Morozov',
    email: 'mas1311@ya.ru'
  },
  {
    name: 'James',
    surname: 'McAdden',
    email: 'jimmy1@live.com'
  },
  {
    name: 'Andrew',
    surname: 'Jackson',
    email: 'andrew@live.com'
  },

];

//Debouncing to stabilise browser performance
function randomDelay() {
  return 100 + Math.random() * 1000;
}


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? allSuggestions() : patients.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

//get All suggestions to output in the beginning
const allSuggestions = () => {
  return patients
}

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name +" "+ suggestion.surname;


//to use when rendering fr blank input
function alwaysRenderSuggestions() {
  return true;
}


// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <Grid>
    <Row>
            <Link to={`patients/${suggestion.name}`} activeClassName="active">
      <Col md={4}>

    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"/>
    </Col>
    <Col md={8}>
      <h5>{suggestion.id}</h5>
    <h3>{suggestion.name + " " + suggestion.surname}</h3> <br/>
    <p>{suggestion.email}</p>

    </Col>
        </Link>
    </Row>
  </Grid>
)

class SearchLoader extends Component {
  constructor(props) {
    super(props);

  }
  render(){

      return <Spinner className="searchLoader" name="ball-clip-rotate" color="steelblue"></Spinner>
  }
}

//customising input field to visualise debouncing
const renderInputComponent = (inputProps) => (
  <div className="inputContainer">
  <input {...inputProps} />
  <SearchLoader {...inputProps}/>
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
      suggestions: allSuggestions(),
      isLoading: false
    };
    // 5000ms debouncing.
    this.debouncedLoadSuggestions = _.debounce(this.loadSuggestions, 500);
  }

/*    componentWillMount(){
    //retrieving patient records from the API
    request
    .get('https://api.fizzyo-ucl.co.uk/api/v1/patient-records')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', "Bearer " + Auth.accessToken)

    .end(function(err, res){
     if (err || !res.ok) {
          alert(err)
        } else {
          alert("success " + JSON.stringify(res.body.length))


          {patients.push(res.body.request)}
          //generatedCode.value = JSON.stringify(res.body.code)

        }
      })
  }*/

  loadSuggestions(value) {
    this.setState({
      isLoading: true
    });

// Fake an AJAX call
setTimeout(() => {
  const suggestions = getSuggestions(value);

  if (value === this.state.value) {
    this.setState({
      isLoading: false,
      suggestions
    });
  } else { // Ignore suggestions if input value changed
    this.setState({
      isLoading: false
    });
  }
}, randomDelay());
}


  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.debouncedLoadSuggestions(value);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, isLoading } = this.state;

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
        getSuggestionValue={getSuggestionValue}
        alwaysRenderSuggestions = {alwaysRenderSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
      />



    </Col>
    <Col md={4} sm={4}  xs={8}>

    <Button className="patientsBtn" bsStyle="primary">Edit</Button>

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
