import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';
import * as powerbi from 'powerbi-client';
import request from 'superagent'

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
    let dashboards = ''
    let btn = ''
    switch (this.props.name || this.state.view) {
      case "Mabel":
      btn = ''
      dashboards= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiYmRkNzcxODAtYTY5ZS00ODQ5LThhMTEtNDExYTI0ZmZlMWNlIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;
      case "Garrett":
      btn = ''
      dashboards= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiNjBlODE4YWYtOGIxZC00MWQ0LWI2NjEtOGNiOGFlOTUzZmFjIiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;
      case "researcher":
      btn = <Button bsStyle="primary" onClick={this.compareDashboard}> Compare patients </Button>
      dashboards= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiMWFiNDM3NTMtOTRkOC00ZGQ1LWJiMzQtOWQxYWNiODZmMzY5IiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;

      case "compare":
      btn = <Button bsStyle="primary" onClick={this.researcherDashboard}> Indidual dashboard </Button>
      dashboards= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiZGFlM2EyOWEtM2JiZi00Y2VmLWJhNmUtYzY5M2Q1YzhmZDE5IiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
      break;
      default:
      btn = ''
      dashboards= <iframe width="799" height="530" src="https://app.powerbi.com/view?r=eyJrIjoiMWFiNDM3NTMtOTRkOC00ZGQ1LWJiMzQtOWQxYWNiODZmMzY5IiwidCI6IjFmYWY4OGZlLWE5OTgtNGM1Yi05M2M5LTIxMGExMWQ5YTVjMiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
}

/*
var client_id = "da8e8782-e13d-4065-acaf-1abec50cdd66"
var response_type ="code"
var redirect_uri = "http://localhost:3000/dashboard"
var response_mode ="form_post"


var authorize = "https://login.microsoftonline.com/fbbae5b9-9849-4197-91af-fe2ef7c16c73/oauth2/authorize?" + "client_id="+client_id+"&response_type="+response_type+"&redirect_uri="+encodeURIComponent(redirect_uri)
//window.location = authorize

var code = "AQABAAIAAAA9kTklhVy7SJTGAzR-p1Bc5jwTxTwWb-lUXj43C82ChKiZGIHzenwipVsIemBN4UZoFNSqaU-T8ndG_8hS6kRKHYxvcEM-9rnad_VqNg1KIQtqzmKgndzC0Q4DFpLgh1w3-oAZLm0fNAVTqh3EStQwF41LLlhpVQA29HisTyW7VeQvUXkr1DozzWeGqTxTqcXgZR5m8dC26iakup1Y1J02SSklQsxu7GYKWLKbkFLB17tsP4_fYp89Uxl-FsOL4xYr3QHlL3H2ueGyUQ3jWjTa97N-G_xqY4RGCuxX6FAqZPeeZCNrAS1Uf6LaoHlUFPz3ZoIbnkoYTrtH_Q3_RBSbhQGMEVIg_dTaI2wmZl0FvKZzcjalA9BOkcu6EObLZ-MkqzzLISOrfV956u7yOIl9j6ZQWpeo-e67XFo9NRJlIDzPTHDJvoSNaBexHe_7e1lNyYw3YlOHPmXiKEZWZwQx2eKrTzr2U0gZ47yKmdw5xp3Xhypj51nh-AIqxdx22ALhdp9rIqBFiHuJ3SSXBT3yIEYLRhc3y0iW5PtekzAyBwahTm_4fD6Lm2ZSfhNe43_rxCeyU5ZYENhnw2jCuNoa3x7KI4iNR5GhsrupxTkbVK8m_Mpw1K558aUmPrAZv1qVRuBqOUIovPvlGNOL0GxoIAA"


var client_secret ='0J54hR3VOS+Klv+lrCQCcUo1nUJPEV/bjJcxGVVPm+E='

var token = "https://login.microsoftonline.com/fbbae5b9-9849-4197-91af-fe2ef7c16c73/oauth2/token"

request
.post(token +"HTTP/1.1")
.set('Content-Type', 'application/x-www-form-urlencoded')
.set('Host', 'https://login.microsoftonline.com')
.set('grant_type', 'authorization_code')
.send({client_id, code,redirect_uri, client_secret})
.end(function(err, res){
 if (err || !res.ok) {
      console.log(err)

    } else {
        console.log(res.body)

    }
  })*/

    return(

      <div className="PatientRecords">
          <Panel className="center" header="Airway Clearance" eventKey="1" bsStyle="primary">
            {btn}
            <center>
              <div className="top-buffer">
              {dashboards}
            </div>

            <div id="dashboardContainer">
              dash
            </div>
          </center>
          </Panel>
      </div>

    )
  }
}
