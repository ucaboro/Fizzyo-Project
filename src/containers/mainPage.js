import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
  Grid,
  Row,
  Col,
  Nav,
  ProgressBar,
  Button,
  DropdownButton,
  MenuItem,
  Panel
} from 'react-bootstrap';

import SideMenu from '../components/SideMenu.js'
import NavHeader from '../components/NavHeader.js'
import DropdownButtonComp from '../components/DropDown.js'

import Users from '../containers/users.js'
import Dashboard from '../containers/dashboard.js'
import Patients from '../containers/patients.js'
import PatientData from '../containers/patientsData.js'
import Login, {Auth} from '../containers/login.js'
import Systatus from '../containers/systemStatus.js'
import Syssettings from '../containers/systemSettings.js'

import Fetch from 'react-fetch'
import request from 'superagent'




export default class MainPage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(

      <Router>

        <div>

          <div className="container-fluid belowNavBar">
            <div className="row">

              <SideMenu  option={this.props.options}/>

              <div className="col-sm-offset-3 col-md-offset-3 page">

              <Route path="/home" component={Home}/>
              <Route path="/users" component={Users}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/systatus" component={Systatus}/>
              <Route path="/syssettings" component={Syssettings}/>
              <Route path="/callback" component={Home}/>
              <Route path="/login" component={Login}/>


              <Switch>
                <Route exact path="/patients" component={Patients}/>
                <Route path="/patients/:patientID" component={PatientData}/>
              </Switch>


              </div>

            </div>
          </div>
        </div>

      </Router>
    )
  }
}

class TestComponent extends Component {
  render() {
        return (
      <div>
        {this.props.currentVersion
          ? <div>Fizzyo API Version: {this.props.currentVersion}</div>
          : 'loading'}
        {this.props
          ? <div>Fizzyo API Available Versions: {this.props.availableVersions}</div>
          : 'loading'}
      </div>
    )
  }
}

class Home extends Component {

   urlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href)
    return (results && results[1]) || undefined
    }

  componentDidMount(){
    let winLiveToken = document.getElementById("windows-live-token")
    var token = this.urlParam('code')
    winLiveToken.innerHTML  = token
  }
  redirectToWindowsLive = () => {

//let link = "https://login.live.com/oauth20_authorize.srf?client_id=65973b85-c34f-41a8-a4ad-00529d1fc23c&scope=wl.basic%20wl.offline_access%20wl.signin%20wl.phone_numbers%20wl.emails&response_type=code&redirect_uri=https%3A%2F%2Fapi.fizzyo-ucl.co.uk%2Fauth-example"

/* Create a Windows Live request URI */
let apiUrl = 'https://login.live.com/oauth20_authorize.srf';
let clientId = '65973b85-c34f-41a8-a4ad-00529d1fc23c';
let scopes = 'wl.basic wl.offline_access wl.signin wl.phone_numbers wl.emails';
//let redirectUri = window.location.href.split('?')[0]+"callback";
let redirectUri = 'http://localhost:3000/callback'
alert(redirectUri)
var authRequestUri = apiUrl + '?client_id=' + clientId + '&scope=' + encodeURIComponent(scopes) + '&response_type=code&redirect_uri=' + encodeURIComponent(redirectUri);

let btn = document.getElementById("windows-live-button")
let response = document.getElementById("windows-live-link")
let att = document.createAttribute("href")
response.innerHTML = authRequestUri
att.value = authRequestUri
btn.setAttributeNode(att);
window.location = authRequestUri

//alert(event.target.getAttribute("href"))
  }

  render() {
    return (

      <Grid>
        <Row className="show-grid">
          <Col md={12}>

            <h2>"Fetching API's version"</h2>
            <Fetch url="https://api.fizzyo-ucl.co.uk/api">
              <TestComponent/>
            </Fetch>

            <span className="label label-success">Success</span>
          </Col>
        </Row>

        <Row className="top-buffer">
          <Col md={12}>

            <Button id="windows-live-button" bsStyle="primary" onClick={this.redirectToWindowsLive}>Login with Windows Live</Button>

              <div class="panel-body top-buffer">
                            <p class="lead">Windows Live generated link <strong id="windows-live-link">---</strong></p>
                            <p class="lead">Windows Live access token <strong id="windows-live-token">---</strong></p>
              </div>


                <div>
                <DropdownButtonComp id="role-btn" title="Select Role" option={["researcher", "administrator", "patient" ]}/>
                </div>

                <div className="top-buffer">
                <Button id="register-button" bsStyle="primary" onClick={this.generateInvCode}>Create Invitation Code</Button>
                <p class="lead">Invitation code <strong id="windows-live-token">---</strong></p>
                </div>




              <div>
              </div>
          </Col>
        </Row>
      </Grid>

    )
  }
}
