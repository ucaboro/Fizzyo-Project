/* global _ */
import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash';
import Spinner from 'react-spinkit'

const names = [
  'Brian',
  'Caley',
  'Casey',
  'Caroline',
  'Chris',
  'David',
  'Misha'
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return names.filter(name => regex.test(name));
}

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => suggestion;

const renderInputComponent = (inputProps) => (
  <div className="inputContainer">
  <input {...inputProps} />
  <Spinner className="searchLoader" name="ball-clip-rotate" color="steelblue"></Spinner>

  </div>
);

export default class Debounce extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
      />
    );
  }
}
