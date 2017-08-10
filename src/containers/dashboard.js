import React, {Component} from 'react';
import {Accordion, Panel} from 'react-bootstrap';

const Dashboard = () => (
  <div className="PatientRecords">



      <Panel className="center" header="Airway Clearance" eventKey="1" bsStyle="primary">
        <center>
        <iframe width="760px" height="500px" src="https://app.powerbi.com/view?r=eyJrIjoiMTg2OWM5ZTMtZTAyYy00MzU2LTk4NTctMzczMDU1OWE5YTlmIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
        </center>
      </Panel>


  </div>

)

export default Dashboard;
