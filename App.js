import React, { Component } from 'react';
import styles from './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Nav, ProgressBar, Button} from 'react-bootstrap';

import SideMenu from './components/SideMenu.js'
import NavHeader from './components/NavHeader.js'

import Users from './containers/users.js'
import Dashboard from './containers/dashboard.js'
import Patients from './containers/patients.js'
import PatientData from './containers/patientsData.js'

import Fetch from 'react-fetch'

export default class App extends Component{
  render(){
    return (
    <MainPage/>
    )
  }
}


class TestComponent extends Component{
  render(){
    console.log(this.props)
    return (
      <div>
        {this.props.currentVersion ? <div>Fizzyo API Version: {this.props.currentVersion}</div>: 'loading'}
        {this.props ? <div>Fizzyo API Available Versions: {this.props.availableVersions}</div>: 'loading'}
      </div>
    )
  }
}


const MainPage = () => (
<Router>
<div>
<NavHeader/>
<div className="container-fluid belowNavBar">
  <div className="row">
<div className="fullmenu">
<SideMenu/>
</div>
    <div className="col-sm-offset-3 col-md-offset-3 page">
      {/*<h1 className="page-header"><Route path="/:id" component={Child}/></h1>*/}

      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/systatus" component={Systatus}/>
      <Route path="/syssettings" component={Syssettings}/>


      <Switch>
      <Route exact path="/patients" component={Patients}/>
      <Route path="/patients/patientData" component={PatientData}/>
      </Switch>



    </div>


    </div>
   </div>
   </div>

 </Router>
)



const Systatus = () => (
  <div>
    <h2>Systatus</h2>
  </div>
)
const Syssettings = () => (
  <div>
    <h2>System settings here</h2>
    <ProgressBar active now={45} />
  </div>
)
class Home extends Component{

  handleClick = (event) => {
    let link = "https://login.live.com/oauth20_authorize.srf?client_id=65973b85-c34f-41a8-a4ad-00529d1fc23c&scope=wl.basic%20wl.offline_access%20wl.signin%20wl.phone_numbers%20wl.emails&response_type=code&redirect_uri=https%3A%2F%2Fapi.fizzyo-ucl.co.uk%2Fauth-example"

    var apiUrl = 'https://login.live.com/oauth20_authorize.srf';
    var clientId = '65973b85-c34f-41a8-a4ad-00529d1fc23c';
    var scopes = 'wl.basic wl.offline_access wl.signin wl.phone_numbers wl.emails';
    var redirectUri = window.location.href.split('?')[0];
    //figure out encodeURIComponent in React
    var authRequestUri = apiUrl + '?client_id=' + clientId + '&scope=' + encodeURIComponent(scopes) + '&response_type=code&redirect_uri=' + encodeURIComponent(redirectUri);
    let btn = document.getElementById("windows-live-button")
    let att = document.createAttribute("href")
    att.value = link
    btn.setAttributeNode(att);

    window.location = link
    alert(event.target.getAttribute("href"))
  }

  render(){
    return(

      <Grid>
          <Row className="show-grid">
            <Col md={12}>

              <h2>Fetching API's version</h2>
              <Fetch url="https://api.fizzyo-ucl.co.uk/api">
                <TestComponent/>
              </Fetch>

              <span className="label label-success">Success</span>
              </Col>
          </Row>

          <Row className="top-buffer">
            <Col md={12}>

              <Button id="windows-live-button" bsStyle="primary" onClick={this.handleClick}>Login with Windows Live</Button>

            </Col>
          </Row>
        </Grid>

    )
  }
}
