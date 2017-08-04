import React, {Component} from 'react';
import {Accordion, Panel} from 'react-bootstrap';
const Dashboard = () => (

  <div className="row">

    <div className="col-md-12">

      <Panel header="Airway Clearance" eventKey="1">
        <center>
        <iframe width="1233" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMTg2OWM5ZTMtZTAyYy00MzU2LTk4NTctMzczMDU1OWE5YTlmIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
        </center>
    </Panel>

      <Accordion>
        <Panel header="Game Statistics" eventKey="2">
          Game statistics to be uploaded
        </Panel>

        <Panel header="Exericse Statistics" eventKey="3">
          Exericse data to be added
        </Panel>
      </Accordion>

    </div>
  </div>

)

export default Dashboard;
