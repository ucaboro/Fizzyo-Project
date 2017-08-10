import React, { Component } from 'react';
import {Header, Navbar, NavItem, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '../App.js'
import logo from './fizzyo_logo.svg';

import Users from '../containers/users.js'
import Dashboard from '../containers/dashboard.js'
import Patients from '../containers/patients.js'
import PatientData from '../containers/patientsData.js'
import Login from '../containers/login.js'
import Systatus from '../containers/systemStatus.js'
import Syssettings from '../containers/systemSettings.js'
import MainPage from '../containers/mainPage.js'

export default class NavHeader extends Component{
  constructor(props) {
    super(props)
}
  render(){
    return(
      <Router>
      <div>
      <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logo} className="App-logo" alt="logo" />
            </Navbar.Brand>


            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

            <UserRole role={this.props.role}/>


            <Nav pullRight>
              <UserGreeting name={this.props.username}/>
              <NavItem  className={this.props.disabled}  eventKey={3} onClick={this.props.onClickLogout}>Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

    </div>
  </Router>
    )
  }
}

function UserGreeting(props){
  let greeting = null


  if (props.name!=null){
    greeting = <div>Signed as <b>{props.name}</b></div>
} else {
    greeting = <div>Not signed in</div>
}

return <NavItem eventKey={1}>{greeting}</NavItem>
}

function UserRole(props){
  let role = null

  if (props.role!=null){
    role = <div>{props.role} Dashboard</div>
} else {
    role = <div></div>
}

return (
 <Nav pullLeft>
  <NavItem><p className="capitalize">{role}</p></NavItem>
  </Nav>
)
}
