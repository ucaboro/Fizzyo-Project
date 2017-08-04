import React, {Component} from 'react'
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap'
import DropdownButtonComp from '../components/DropDown.js'
import request from 'superagent'
import NavHeader from '../components/NavHeader.js'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Users from '../containers/users.js'
import MainPage from './mainPage.js'
import SideMenu from '../components/SideMenu.js'
import Dashboard from '../containers/dashboard.js'
import Spinner from 'react-spinkit'



export default class LoginControl extends Component{
constructor(props){
  super(props)
  this.handleLoginClick = this.handleLoginClick.bind(this)
  this.handleLogoutClick = this.handleLogoutClick.bind(this)
  this.state = {isLoggedIn:false}
}



handleLoginClick = () =>{
    let roleBtn = document.getElementById('role-testing')
    let selectedRole = roleBtn.options[roleBtn.selectedIndex].value

    let username = null;
    //setting the testing role based on the selected role
    switch(selectedRole){
      case "researcher": username = "test-researcher"
       break
      case "administrator": username = "test-admin"
       break
      case "patient": username = "test-patient"
      break

    }

    let password = "FizzyoTesting2017"
    //setting response message in HTML
    let responseMsg = document.getElementById('test-user-login')
    var self = this
    request
  .post('https://api.fizzyo-ucl.co.uk/api/v1/auth/test-token')
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .send({ username, password})
  .end(function(err, res){
    if (err || !res.ok) {
         responseMsg.innerHTML = "error"
       } else {
         responseMsg.innerHTML = JSON.stringify(res.body)

         //Setting LoggedIn user's variables
         Auth.accessToken = res.body.accessToken
         Auth.user.id = res.body.user.idea
         Auth.user.role = res.body.user.role
         Auth.user.name = res.body.user.firstName

         //Seeting isLoggedIn to true on success
         self.setState({isLoggedIn : true})
       }
     });
  }


handleLogoutClick(){
  this.setState({isLoggedIn: false})
}


  render(){

    const isLoggedIn = this.state.isLoggedIn
    let button = null
    let page = null
    let header = null
    let menu = null

    if(isLoggedIn){

      header = <NavHeader onClick={this.handleLogoutClick} username={Auth.user.name} role={Auth.user.role}/>

      switch(Auth.user.role){
        case "administrator":
          page =<MainPage options={["Home", "Dashboard", "Users", "Patients", "System Status", "System Settings"]}/>
        break
        case "researcher":
          page =<MainPage options={["Home", "Dashboard", "Users", "Patients"]}/>
        break
        case "patient":
          page =<Dashboard />
        break
      }

    } else {
      header = <NavHeader disabled="disabled"/>
      page =  <Login onClick = {this.handleLoginClick}/>

    }
    return(
      <div>
        {header}
        {page}
      </div>
    )
  }
}



function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Login (props){

  return(
    <div>
    <Grid>
    <Row className="top-buffer">
    <Col md={12}>
    <Panel header="Testing user authorisation with different roles" bsStyle="primary">
    <DropdownButtonComp id="role-testing" title="Select Role" option={["researcher", "administrator", "patient" ]}/>
    <Row className="top-buffer">
    <Col md={3}>
    <Button id="login-user-button" bsStyle="primary" onClick={props.onClick}>Login</Button>
    <p><strong id="test-user-login"></strong></p>
    </Col>
    </Row>
    </Panel>
    </Col>
    </Row>
    </Grid>
    </div>
  )
}

export class Auth{
  static user = {
    id: '',
    role: '',
    name: ''
  }

  static accessToken = ''
}
