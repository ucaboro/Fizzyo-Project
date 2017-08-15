/* global _ */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import {ListGroup, Table, ListGroupItem, Panel, Alert, Row, Col, Grid, Button} from 'react-bootstrap';
import debounce from 'lodash';
import Spinner from 'react-spinkit'
import request from 'superagent'
import WinLiveLogin, {Auth} from '../containers/winLiveLogin.js'
import IsolatedScroll from 'react-isolated-scroll';

// Imagine you have a list of names that you'd like to autosuggest.
const patients = [];

//Debouncing to stabilise browser performance
function randomDelay() {
  return 100 + Math.random() * 1000;
}


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? allSuggestions() : patients.filter(lang =>
    lang.firstName.toLowerCase().slice(0, inputLength) === inputValue
  );
};

//get All suggestions to output in the beginning
const allSuggestions = () => {
  return patients
}

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.firstName +" "+ suggestion.lastName;


//to use when rendering fr blank input
function alwaysRenderSuggestions() {
  return true;
}


// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <Grid>
    <Row>
      <span>
            <Link to={`patients/${suggestion.id}/${suggestion.firstName}`} activeClassName="active">
      <Col md={2}>

    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"/>
    </Col>
    <Col md={10}>

      <h5>{suggestion.userId}</h5>
    <h3>{suggestion.firstName + " " + suggestion.lastName}</h3> <br/>
    <p>{suggestion.email}</p>

    </Col>
        </Link>
      </span>
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

    /*
    *preventing repeating "componentDidMount" update if the user accesses the page
    *after being in another route.
    *The condition is needed to avoid multiple rendering
    */
    if(this.state.suggestions.length==0){

     this.setState({isLoading:true})
     var self = this
      //retrieving patient records from the API
      request
      .get('https://api.fizzyo-ucl.co.uk/api/v1/patient-records')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', "Bearer " + Auth.accessToken)

      .end(function(err, res){
       if (err || !res.ok) {
            alert(err)
          } else {
              //setting the state to show at the page load
              self.setState({suggestions: res.body.records})
          }
          //pushing to reserved patient array one by one
          for(var i=0; i<res.body.records.length; i++){
            patients.push(res.body.records[i])
          }
        })
    }
  }




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

        <Panel header = "Select the patient" bsStyle = "primary" >
          <Row>
          <Col md={12}>
          <Alert bsStyle="info">
          <Col>
            <p>To <strong>select a patient </strong> start typing their name</p>
            <p>Select a patient to access their data</p>
          </Col>
        </Alert>
      </Col>

        </Row>
        <Row className="searchAndAdd top-buffer">
        <Col md={12} sm={12} xs={12}>
        <p>Patients in the system: {this.state.suggestions.length} </p>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        getSuggestionValue={getSuggestionValue}
        alwaysRenderSuggestions = {alwaysRenderSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />



    </Col>

    </Row>
  </Panel>

  </div>
    );
  }
}
