import React, {Component} from 'react';
import styles from './App.css';
import MainPage from './containers/mainPage.js'
import LoginControl from './containers/login.js'
//import LoginControl from './containers/login.js'
import NavHeader from './components/NavHeader.js'

export default class App extends Component {

  render() {
    return (<LoginControl/>)
  }
}
