import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Link} from 'react-router-dom';
import UserIcon from 'react-icons/lib/fa/user'
import GearIcon from 'react-icons/lib/fa/cog';
import DashboardIcon from 'react-icons/lib/fa/dashboard';
import PatientIcon from 'react-icons/lib/fa/stethoscope';
import HomeIcon from 'react-icons/lib/ti/home';
import SysStatusIcon from 'react-icons/lib/ti/warning';
import SysSettingsIcon from 'react-icons/lib/fa/cogs';

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

export default SideMenu;
