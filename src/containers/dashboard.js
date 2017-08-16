import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';



export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.compareDashboard = this.compareDashboard.bind(this)
    this.researcherDashboard = this.researcherDashboard.bind(this)
    this.state = {view: 'researcher'}
  }


  compareDashboard(){
    this.setState({view: "compare"})
  }

  researcherDashboard(){
    this.setState({view: "researcher"})
  }

  render(){
    let dashboard = ''
    let btn = ''
    switch (this.props.name || this.state.view) {
      case "Mabel":
      btn = ''
      dashboard= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiYmRkNzcxODAtYTY5ZS00ODQ5LThhMTEtNDExYTI0ZmZlMWNlIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;
      case "Garrett":
      btn = ''
      dashboard= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiNjBlODE4YWYtOGIxZC00MWQ0LWI2NjEtOGNiOGFlOTUzZmFjIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;
      case "researcher":
      btn = <Button bsStyle="primary" onClick={this.compareDashboard}> Compare patients </Button>
      dashboard= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiMWFiNDM3NTMtOTRkOC00ZGQ1LWJiMzQtOWQxYWNiODZmMzY5IiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;

      case "compare":
      btn = <Button bsStyle="primary" onClick={this.researcherDashboard}> Indidual dashboard </Button>
      dashboard= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiZGFlM2EyOWEtM2JiZi00Y2VmLWJhNmUtYzY5M2Q1YzhmZDE5IiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;
      default:
      btn = ''
      dashboard= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiMWFiNDM3NTMtOTRkOC00ZGQ1LWJiMzQtOWQxYWNiODZmMzY5IiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
}


    return(

      <div className="PatientRecords">
          <Panel className="center" header="Airway Clearance" eventKey="1" bsStyle="primary">
            {btn}
            <center>
              <div className="top-buffer">
              {dashboard}
            </div>
          </center>
          </Panel>
      </div>

    )
  }
}
