import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UserIcon from 'react-icons/lib/fa/user'
import GearIcon from 'react-icons/lib/fa/cog';
import DashboardIcon from 'react-icons/lib/fa/dashboard';
import PatientIcon from 'react-icons/lib/fa/stethoscope';
import HomeIcon from 'react-icons/lib/ti/home';
import SysStatusIcon from 'react-icons/lib/ti/warning';
import SysSettingsIcon from 'react-icons/lib/fa/cogs';

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
    var options = []

    //conditions for cases when no menu is needed (e.g. parent, patient)
    if(this.props.option.length>0){
    for (let i = 0; i < this.props.option.length; i++) {
      options.push(this.props.option[i])
    }
    this.state = {
      options
    }
    this.state.link = []
    this.state.icon = []
    for (let i = 0; i < this.state.options.length; i++) {
      switch (this.state.options[i]) {
        case "Home":
          this.state.link[i] = "/home"
          this.state.icon[i] = <HomeIcon/>
          break
        case "Dashboard":
          this.state.link[i] = "/dashboard"
          this.state.icon[i] = <DashboardIcon/>
          break
        case "Create Invitation":
          this.state.link[i] = "/users"
          this.state.icon[i] = <UserIcon/>
          break
        case "Patient records":
          this.state.link[i] = "/patients"
          this.state.icon[i] = <PatientIcon/>
          break
        case "System Status":
          this.state.link[i] = "/systatus"
          this.state.icon[i] = <SysStatusIcon/>
          break
        case "User Settings":
          this.state.link[i] = "/syssettings"
          this.state.icon[i] = <SysSettingsIcon/>
          break
      }
    }
}
  }

  render() {

    return (
      <div className="fullmenu">
      <div className="sidebar col-md-3 nav-side-menu">
        {this.state.options.map((name, index) => (
          <ul id="menu-content" className="menu-content">
            <li>
              <Link to={{
                pathname: this.state.link[index]
              }}>
                {this.state.icon[index]}
                &nbsp;
                {name}

              </Link>
            </li>
          </ul>

        ))}
      </div>
    </div>
    )
  }
}
