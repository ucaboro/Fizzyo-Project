import React, {Component} from 'react';
import {DropdownButton, MenuItem} from "react-bootstrap";


const Users = () => (

  <div className="panel panel-default addUser">
    <div className="panel-heading">
      <h1>Add User</h1>
    </div>

    <div className="panel-body">
      <form role="form">
        <div className="row">

          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name"></input>
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"></input>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
        <div className="form-group">
          <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address"></input>
        </div>
      </div>

        <div className="col-xs-6 col-sm-6 col-md-6">
        <DropdownButton bsStyle="default" title="Select user role" >
          <MenuItem eventKey="1">Researcher</MenuItem>
          <MenuItem eventKey="2">Parent</MenuItem>
          <MenuItem eventKey="3" active>Clinician</MenuItem>
        </DropdownButton>
      </div>
      </div>


        <div className="row">

          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"></input>
            </div>

          </div>

          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password"></input>
            </div>
          </div>

        </div>

        <input type="submit" value="Add User" className="btn btn-block btn-success"></input>
      </form>
    </div>
  </div>
)

export default Users;
