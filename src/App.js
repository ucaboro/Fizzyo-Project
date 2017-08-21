import React, {Component} from 'react';
import WinLiveLogin from './containers/winLiveLogin.js'
import Spinner from 'react-spinkit'
import styles from './App.css';


/**
  * @desc this class launches the first Login component
  * @author Anton Morozov ucaboro@ucl.ac.uk
  * @required WiniveLogin.js
*/
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 1500);
  }

  render() {
    const {loading} = this.state;
    //Use LoadingSpinner for loading animation
    return (this.state.loading
      ? <LoadingSpinner/>
      : <WinLiveLogin/>)
  }
}

function LoadingSpinner() {
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Spinner className="loader" name="ball-scale-multiple" color="steelblue"></Spinner>
      </div>
      <div className="col-md-4"></div>
    </div>
  )
}
