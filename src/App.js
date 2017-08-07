import React, {Component} from 'react';
import styles from './App.css';
import MainPage from './containers/mainPage.js'
import LoginControl from './containers/login.js'
import WinLiveLogin from './containers/winLiveLogin.js'
//import LoginControl from './containers/login.js'
import NavHeader from './components/NavHeader.js'
import Users from './containers/users.js'
import Example, {Patients} from './containers/patients.js'
import Spinner from 'react-spinkit'

export default class App extends Component {
  constructor() {
  super();

  this.state = {
    loading: true
  };

}

componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);

}


//<Spinner name="chasing-dots" color="steelblue"/>
  render() {
     const { loading } = this.state;

    return ( this.state.loading ? <LoadingSpinner/> : <WinLiveLogin/>)

  }
}

function LoadingSpinner(){
  return (

  <div className="row">
    <div className="col-md-4">
    </div>
    <div className="col-md-4">
      <Spinner className="loader" name="ball-scale-multiple" color="steelblue"></Spinner>
    </div>
    <div className="col-md-4">
    </div>
</div>
)
}
