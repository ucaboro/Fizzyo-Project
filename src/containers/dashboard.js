import React, {Component} from 'react';
import {Accordion, Panel} from 'react-bootstrap';

const Dashboard = () => (
  <div className="PatientRecords">



      <Panel className="center" header="Airway Clearance" eventKey="1" bsStyle="primary">
        <center>
          <iframe width="760px" height="500px" src="https://app.powerbi.com/view?r=eyJrIjoiY2E4MTI2YmItM2M2Yi00ZWExLTlkNDEtNDA1ODgxNzhiODNhIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9&filter=mainTable/Name eq 'Claire'" frameborder="0" allowFullScreen="true"></iframe>
        </center>
      </Panel>


  </div>

)

export default Dashboard;
