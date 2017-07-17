import React, { Component } from 'react';
import logo from './fizzyo_logo.svg';
import styles from './App.css';
import UserIcon from 'react-icons/lib/fa/user'
import Users from 'react-icons/lib/fa/user-plus';
import Gear from 'react-icons/lib/fa/cog';
import Dashboard from 'react-icons/lib/fa/dashboard';
import Patients from 'react-icons/lib/fa/stethoscope';
import Home from 'react-icons/lib/ti/home';
import SysStatus from 'react-icons/lib/ti/warning';
import SysSettings from 'react-icons/lib/fa/cogs';
import Logout from './login';
//import * as pbi from 'powerbi-client';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';


/*class App extends Component {
  render() {
    return (
      <div className="Page">
        <div className="Page-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className = "DashboardTitle">Dashboard </h2>
          <UserIcon id="userMenu" className="UserIcon"/>
          <Gear id="settingsMenu" className="Settings"/>

        </div>

        <p className="Intro">
        Graphs and styling to be uploaded from <code> Power Bi REST API</code>
        </p>
 </div>
    );
  }
}

/*testing bootstrap functionality
  <div class="page">
    <Row className="show-grid">
        <Col xs={2} md={3}>Menu here</Col>
        <Col xs={10} md={9}>Content here</Col>
      </Row>
  </div>*/

const SideMenu = () => (
<Router>

      <div className="nav-side-menu">
        <div className="brand">Fizzyo</div>

        <div className="menu-list">

            <ul id="menu-content" className="menu-content">
                <li>
                <Link to="/">
                    <Home/> Home
                </Link>
                </li>
            </ul>

            <ul id="menu-content" className="menu-content">
                <li>
                  <Link to="/dashboard">
                  <Dashboard/>  dashboard
                  </Link>
                </li>
            </ul>

            <ul id="menu-content" className="menu-content">
                <li>
                  <Link to="/users">
                  <Users/> Users
                  </Link>
                </li>
            </ul>

            <ul id="menu-content" className="menu-content">
                <li>
                  <Link to="/patients">
                  <Patients/> Patients
                  </Link>
                </li>
            </ul>

            <ul id="menu-content" className="menu-content">
                <li>
                  <Link to="/systatus">
                  <SysStatus/>System status
                  </Link>
                </li>
            </ul>

            <ul id="menu-content" className="menu-content">
                <li>
                  <Link to="/syssettings">
                  <SysSettings/> System settings
                  </Link>
                </li>
            </ul>


     </div>
    <Route path="/:id" component={Child}/>
   </div>
 </Router>
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)
export default SideMenu

class dashboard extends Component {
  render() {
    return (
      <div className="Page">
        <div className="Page-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className = "DashboardTitle">Dashboard </h2>
          <UserIcon id="userMenu" className="UserIcon"/>
          <Gear id="settingsMenu" className="Settings"/>

        </div>
        <p className="Intro">
        Graphs and styling to be uploaded from <code> Power Bi REST API</code>
        </p>
 </div>
    );
  }
}


//export default App;
