import React, {Component} from 'react';
import {Accordion, Panel} from 'react-bootstrap';
const Dashboard = () => (

  <div className="row">

    <div className="col-md-12">

      <Panel header="Airway Clearance" eventKey="1">
        <iframe width="1233" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMTg2OWM5ZTMtZTAyYy00MzU2LTk4NTctMzczMDU1OWE5YTlmIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      </Panel>

      <Accordion>
        <Panel header="Game Statistics" eventKey="2">
          <iframe width="1233" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiOGM3MGZlZDEtN2Q2NC00YmMyLWFlMzYtNTQ0ZDU2MjY0MjBiIiwidCI6IjNmODQyZWVmLTg4NGMtNDkzNi1iYjVmLWEzZjhiNWMxNTdjMiJ9" frameborder="0" allowFullScreen="true"></iframe>
        </Panel>

        <Panel header="Exericse Statistics" eventKey="3">
          <iframe width="1233" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiOGM3MGZlZDEtN2Q2NC00YmMyLWFlMzYtNTQ0ZDU2MjY0MjBiIiwidCI6IjNmODQyZWVmLTg4NGMtNDkzNi1iYjVmLWEzZjhiNWMxNTdjMiJ9" frameborder="0" allowFullScreen="true"></iframe>
        </Panel>
      </Accordion>

    </div>
  </div>

)

export default Dashboard;
