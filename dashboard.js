import React, { Component } from 'react';
import logo from './fizzyo_logo.svg';
import styles from './App.css';
import UserIcon from 'react-icons/lib/fa/user'
import Users from 'react-icons/lib/fa/user-plus';
import ReactDOM from 'react-dom';

class dashboard extends Component {
  render() {
    return (
      <div classNameName="Page">
        <div classNameName="Page-header">
          <img src={logo} classNameName="App-logo" alt="logo" />
          <h2 classNameName = "DashboardTitle">Dashboard </h2>
          <UserIcon id="userMenu" classNameName="UserIcon"/>
          <Gear id="settingsMenu" classNameName="Settings"/>

        </div>
        <p classNameName="Intro">
        Graphs and styling to be uploaded from <code> Power Bi REST API</code>
        </p>
 </div>
    );
  }
}

ReactDOM.render(< PageHeader/>, document.getElementById('root'));
