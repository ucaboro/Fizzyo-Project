import React, { Component } from 'react';
import logo from './fizzyo_logo.svg';
import styles from './App.css';
import UserIcon from 'react-icons/lib/fa/user'
import UsersIcon from 'react-icons/lib/fa/user-plus';
import GearIcon from 'react-icons/lib/fa/cog';
import DashboardIcon from 'react-icons/lib/fa/dashboard';
import PatientIcon from 'react-icons/lib/fa/stethoscope';
import HomeIcon from 'react-icons/lib/ti/home';
import SysStatusIcon from 'react-icons/lib/ti/warning';
import SysSettingsIcon from 'react-icons/lib/fa/cogs';
//import * as pbi from 'powerbi-client';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Nav, ProgressBar } from 'react-bootstrap';
import Dashboard from './dashboard.js'
import Users from './users.js'
import Patients from './patients.js'
import PatientData from './patientsData.js'
import Fetch from 'react-fetch'

export default class App extends Component{


  render(){
    return (
    <MainPage/>
    )
  }

}



{/*<Fetch url="https://api.fizzyo-ucl.co.uk/api">
  <TestComponent/>
</Fetch>*/}

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
<Header/>
<div className="container-fluid">
  <div className="row">

<div className="fullmenu">
<SideMenu/>
</div>



    <div className=" col-sm-offset-3 col-md-offset-2 page">
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


const SideMenu = () => (
  <div className="sidebar col-md-3 nav-side-menu">

      <ul id="menu-content" className="menu-content">
          <li>
          <Link to="/">
              <HomeIcon/> Home
          </Link>
          </li>
      </ul>

      <ul id="menu-content" className="menu-content">
          <li>
            <Link to="/dashboard">
            <DashboardIcon/>  Dashboard
            </Link>
          </li>
      </ul>

      <ul id="menu-content" className="menu-content">
          <li>
            <Link to="/users">
            <UserIcon/> Users
            </Link>
          </li>
      </ul>

      <ul id="menu-content" className="menu-content">
          <li>
            <Link to="/patients">
            <PatientIcon/> Patients
            </Link>
          </li>
      </ul>

      <ul id="menu-content" className="menu-content">
          <li>
            <Link to="/systatus">
            <SysStatusIcon/> System status
            </Link>
          </li>
      </ul>

      <ul id="menu-content" className="menu-content">
          <li>
            <Link to="/syssettings">
            <SysSettingsIcon/> System settings
            </Link>
          </li>
      </ul>
    </div>
)
const Child = ({ match }) => (

  <div>

    <h3>ID: {match.params.id}</h3>

  </div>
)
const Header = () => (

  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid  Page-header">
      <div className="navbar-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className = "DashboardTitle">Dashboard </h2>
        <UserIcon id="userMenu" className="UserIcon"/>
        <GearIcon id="settingsMenu" className="Settings"/>
      </div>




    </div>
  </nav>

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
const Home = () => (
  <div>
    <h2>Home</h2>
    <Fetch url="https://api.fizzyo-ucl.co.uk/api">
      <TestComponent/>
    </Fetch>

<span className="label label-success">Success</span>



  </div>
)

{/*const Dashboard = () => (
  <div>
    <iframe width="1233" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiOGM3MGZlZDEtN2Q2NC00YmMyLWFlMzYtNTQ0ZDU2MjY0MjBiIiwidCI6IjNmODQyZWVmLTg4NGMtNDkzNi1iYjVmLWEzZjhiNWMxNTdjMiJ9" frameborder="0" allowFullScreen="true"></iframe>
  </div>
)*/}
