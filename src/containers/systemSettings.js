import React, { Component } from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
import {Auth} from '../containers/winLiveLogin.js'

export default class Syssettings extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="PatientRecords">
        <Panel className="center" header="User Settings" eventKey="1" bsStyle="primary">
          <Col md={6}>
            <h4><b>Id:</b></h4> {Auth.user.id}
          </Col>
          <Col md={6}>
              <h4><b>Name:</b></h4> {Auth.user.name}
          </Col>
          <Col md={6}>
              <h4><b>Role:</b></h4>  {Auth.user.role}
          </Col>
          <Col md={6}>
              <h4><b>Fizzyo Access Token:</b></h4>  {Auth.accessToken}
          </Col>
        </Panel>

      </div>



    )
  }
}
