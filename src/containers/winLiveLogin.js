import React, {Component} from 'react'
import {Grid, Row, Col, Panel, Button, Alert, FormGroup, FormControl} from 'react-bootstrap'
import DropdownButtonComp from '../components/DropDown.js'
import request from 'superagent'
import NavHeader from '../components/NavHeader.js'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Users from '../containers/users.js'
import MainPage from './mainPage.js'
import SideMenu from '../components/SideMenu.js'
import Dashboard from '../containers/dashboard.js'
import Spinner from 'react-spinkit'
import logo from '../components/fizzyo_logo.svg'
import About from '../containers/about.js'



export default class WinLiveLogin extends Component{
constructor(props){
  super(props)
  //Binding to allow accessing state
  this.switchToRegister = this.switchToRegister.bind(this)
  this.switchToLogin = this.switchToLogin.bind(this)
  this.redirectToWindowsLive = this.redirectToWindowsLive.bind(this)
  this.registerClick = this.registerClick.bind(this)
  this.handleLogoutClick =this.handleLogoutClick.bind(this)
  this.goToAbout = this.goToAbout.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
  this.state = {registerScreen: '', isLoggedIn:"", toRegister: ''}
}

//switch view to the Register screen without redirection
switchToRegister(){
    this.setState({registerScreen:true})

}
//switch view back to the Login screen without redirection
switchToLogin(){
  this.setState({registerScreen:false})

}

/**
*
* Section for Windows Live Authentication
*
*
*
*/


//Recieving the code from Windows Live
urlParam(name){
 var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href)
 return (results && results[1]) || undefined
 }

/*
*On getting back from the Windows Live authorisation screen
*check wether the code is retrieved and try loggin in the Fizzyo Portal
*
*/
componentDidMount(){

var self = this
 let winLiveToken = document.getElementById("windows-live-token")
 var authCode = this.urlParam('code')

//removing uneccessary token visual
 //winLiveToken.innerHTML =  authCode

 let host = window.location.hostname
 let port = host === 'localhost' ? `:${window.location.port}/callback` : '';
 let redirectUri = `${window.location.protocol}//${host}${port}`
 //let redirectUri = window.location.href.split('?')[0];
//let redirectUri = window.location.protocol+"//"+ window.location.hostname+":" +window.location.port+'/callback';

  //trying to go through - if error, allow user to use their Windows Live token to register

  request
  .post('https://api.fizzyo-ucl.co.uk/api/v1/auth/token')
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .send({redirectUri, authCode})
  .end(function(err, res){
   if (err || !res.ok) {
        console.log("couldn't go through. User should register first "+err)
        self.setState({toRegister:true})
        self.setState({isLoggedIn: "no"})
      } else {
        Auth.accessToken = res.body.accessToken
        Auth.user.id = res.body.user.id
        Auth.user.role = res.body.user.role
        Auth.user.name = res.body.user.firstName

        self.setState({toRegister:false})
        self.setState({isLoggedIn: "yes"})
        //Setting LoggedIn user's variables

      }
    })


//trying to retrieve Fizzyo API auth token if the Windows Token has been already retrieved
  if(authCode!=null && authCode!="undefined" && this.state.toRegister!=true && this.state.toRegister!=''){

//POST request to API
this.setState({isLoggedIn: "loading"})

    request
    .post('https://api.fizzyo-ucl.co.uk/api/v1/auth/token')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({redirectUri, authCode})
    .end(function(err, res){
     if (err || !res.ok) {
          console.log(err)
        } else {

          //Setting LoggedIn user's variables
          Auth.accessToken = res.body.accessToken
          Auth.user.id = res.body.user.id
          Auth.user.role = res.body.user.role
          Auth.user.name = res.body.user.firstName
          self.setState({isLoggedIn: "yes"})

        }
      })

    }else {
        this.setState({isLoggedIn: "no"})
  }


}

//Redirecting to Windows Live for loggin functionality
redirectToWindowsLive(e)  {
e.preventDefault()


var authCode = this.urlParam('code')
/* Create a Windows Live request URI*/
let apiUrl = 'https://login.live.com/oauth20_authorize.srf';
let clientId = '65973b85-c34f-41a8-a4ad-00529d1fc23c';
let scopes = 'wl.basic wl.offline_access wl.signin wl.phone_numbers wl.emails';

let host = window.location.hostname
let port = host === 'localhost' ? `:${window.location.port}/callback` : '';
let redirectUri = `${window.location.protocol}//${host}${port}`

//let redirectUri = window.location.protocol+"//"+ window.location.hostname+":" +window.location.port +"/callback";
var authRequestUri = apiUrl + '?client_id=' + clientId + '&scope=' + encodeURIComponent(scopes) + '&response_type=code&redirect_uri=' + encodeURIComponent(redirectUri);

let btn = document.getElementById("windows-live-button")
let att = document.createAttribute("href")
att.value = authRequestUri
btn.setAttributeNode(att)
window.location = authRequestUri

}

//Registration functionality
registerClick(e){
  e.preventDefault()
  let btn = document.getElementById('register-button')

  let host = window.location.hostname
  let port = host === 'localhost' ? `:${window.location.port}/callback` : '';
  let redirectUri = `${window.location.protocol}//${host}${port}`
  var authCode = this.urlParam('code')
  var invitationCode = document.getElementById('invCode').value
//POST request to API

request
.post('https://api.fizzyo-ucl.co.uk/api/v1/auth/register')
.set('Content-Type', 'application/x-www-form-urlencoded')
.send({redirectUri, authCode, invitationCode})
.end(function(err, res){
 if (err || !res.ok) {
      alert(err)
    } else {
      alert("Registered Successfully")

      //generatedCode.value = JSON.stringify(res.body.accessToken)
    }
  })
}

goToAbout(){
  this.setState({isLoggedIn: ""})
}

goToLogin(){
  this.setState({isLoggedIn: "no"})
}
//Logging out
handleLogoutClick(){
  this.setState({isLoggedIn: "no"})
}

//retrieving Settings
handleSettingsClick(){
<Link to="/syssettings"/>
}

testLoginClick = () =>{
    let roleBtn = document.getElementById('role-testing')
    let selectedRole = roleBtn.options[roleBtn.selectedIndex].value

    let username = null;
    //setting the testing role based on the selected role
    switch(selectedRole){
      case "administrator": username = "test-admin"
       break
      case "researcher": username = "test-researcher"
       break
      case "md-team": username = "test-md-team"
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
         console.log("test user login error" +err)
       } else {

         //Setting LoggedIn user's variables
         Auth.accessToken = res.body.accessToken
         Auth.user.id = res.body.user.id
         Auth.user.role = res.body.user.role
         Auth.user.name = res.body.user.firstName
         //alert(Auth.accessToken)
         //Seeting isLoggedIn to true on success
         self.setState({isLoggedIn : "yes"})
       }
     });
  }



  render(){

    const isLoggedIn = this.state.isLoggedIn
    let button = null
    let page = null
    let header = null
    let menu = null

    //Set up the page design when the user logs in
    if(isLoggedIn=="yes"){

      //The header (navbar) component will have the username and role + Logout button
      header = <NavHeader onClickLogout={this.handleLogoutClick} username={Auth.user.name} role={Auth.user.role} loginLogoutText="Logout" onClickLogout={this.goToLogin}/>

      switch(Auth.user.role){
        case "administrator":
          page =<MainPage options={[ "Dashboard", "Create Invitation", "Patient records", "User Settings"]}/>
        break
        case "researcher":
          page =<MainPage options={["Dashboard", "Create Invitation", "Patient records"]}/>
        break
        case "md-team":
          page =<MainPage options={["Dashboard", "Create Invitation", "Patient records"]}/>
        break
        case "patient":
          page =<MainPage options={["Dashboard"]}/>
        break
      }

    } if(isLoggedIn=="no"){
      header = <NavHeader loginLogoutText="About" onClickLogout={this.goToAbout}/>
      page =  <LoginRegister toRegister={this.switchToRegister} backToLogin={this.switchToLogin} onRegisterLive={this.registerClick} onLive = {this.redirectToWindowsLive} testLogin={this.testLoginClick} status={this.state.registerScreen}/>

    }if(isLoggedIn=="loading"){
      header = <NavHeader disabled="disabled"/>
      page =   <Spinner className="loader" name="ball-scale-multiple" color="steelblue"></Spinner>
    }
  if(isLoggedIn==""){
    header = <NavHeader loginLogoutText="Login" onClickLogout={this.goToLogin}/>
    page =  <About/>
  }
    return(
      <div>
        {header}
        {page}
      </div>
    )
  }
}

//View for Login / Register components
const LoginRegister = (props) => {

let page = ''
let testing = ''
if (props.status==false){
 page = <Login onTestLoginClick={props.testLogin}onRegisterSwitch={props.toRegister} toLive={props.onLive} />


} else {
 page = <Register onRegisterClick={props.onRegisterLive} onLoginSwitch={props.backToLogin} toLive={props.onLive} />
}

return (<div>{page}</div>)
}
 const Login = (props) => {

  return(
    <div>
    <Grid>
    <Row>
    <Col xs={12}>
    <div className="login-page">
      <div className="form">
      <img width="189" height="255"  src={logo} alt="Fizzyologo" />
        <form className="login-form">

        <button onClick={props.toLive} id="windows-live-button" >LOGIN with Windows Live</button>
          <Info/>

        <button className="top-buffer"  onClick={props.onRegisterSwitch}>Register</button>
          </form>
        </div>
      </div>
    </Col>
  </Row>

  <Row className = "center">
    <Col md={12}>
      <Panel header="Testing user authorisation with different roles" bsStyle="primary">
      <DropdownButtonComp id="role-testing" title="Select Role" option={["administrator", "researcher", "md-team", "patient" ]}/>

      <Col md={12}>
      <Button className= "top-buffer center" id="login-user-button" bsStyle="primary" onClick={props.onTestLoginClick}>Login</Button>
      </Col>
    </Panel>
    </Col>
  </Row>
</Grid>
</div>
  )
}

const Info = (props) =>{
 return(<div></div>)
}


class Register extends Component{
  constructor(props){
    super(props)
  }

render(){
  return(
    <div>
    <Grid>
    <Row>
    <Col xs={12}>
    <div className="login-page">
      <div className="form">

      <Alert bsStyle="info">
        <p><strong>To Register: </strong> Login with your Windows Live account  </p>
        <p>Paste <strong> Invitation code </strong> shared by another user and click <strong> Register </strong></p>
      </Alert>


        <form className="login-form">
        <button className="top-buffer" id="windows-live-button" onClick={this.props.toLive}>LOGIN with Windows Live</button>
          <input className="top-buffer" type="text" id="invCode" placeholder="paste invitation code here.."/>

          <button onClick={this.props.onRegisterClick}>Register with Fizzyo</button>
        <p className="message">Already registered? <Button onClick={this.props.onLoginSwitch}>Login</Button></p>
        </form>
    </div>
    </div>
    </Col>
    </Row>
    </Grid>
    </div>
  )
}

}

//Auth class for storing user credentials
export class Auth{
  static user = {
    id: '',
    role: '',
    name: ''
  }

  static accessToken = ''
}
