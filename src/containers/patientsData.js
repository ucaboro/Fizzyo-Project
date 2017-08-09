import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Nav,
  ProgressBar,
  Button,
  DropdownButton,
  MenuItem,
  Panel,
  FormGroup,
  FormControl,
  Form,
  Alert
} from 'react-bootstrap';
import DropdownButtonComp from '../components/DropDown.js'
import WinLiveLogin, {Auth} from '../containers/winLiveLogin.js'
import request from 'superagent'
import Spinner from 'react-spinkit'

export default class PatientsData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldComponents: [],
      isLoading: false
    }
    //this.getFieldsFromAPI = this.getFieldsFromAPI.bind(this)

  }

  componentWillMount(){
    var id = "17eecd4e-06d2-46c3-9f71-7d31aa4a6942"
    var fieldComponent = []
    var self = this
    this.setState({isLoading: true})
    //getting all the fields from the API
    request.get(`https://api.fizzyo-ucl.co.uk/api/v1/patient-records/${id}`)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', "Bearer Jovm9gW4QbY7kLZ5E2Kzq9KezqM5YxjX")
    .end(function(err, res) {
      if (err || !res.ok) {
        alert(err)
      } else {
        //passing the data to variables
        //var response = JSON.parse(res.body)
        var fields = res.body.data
        self.setState({fieldComponents: fields, isLoading: false})
        }
      })

  }



/*  getFieldsFromAPI() {
    //constructor acts as componentDidMount()
    var id = "17eecd4e-06d2-46c3-9f71-7d31aa4a6942"
    var fieldComponent = []
    //getting all the fields from the API
    request.get(`https://api.fizzyo-ucl.co.uk/api/v1/patient-records/${id}`).set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer Jovm9gW4QbY7kLZ5E2Kzq9KezqM5YxjX").end(function(err, res) {
      if (err || !res.ok) {
        alert(err)
      } else {
        //passing the data to variables
        //var response = JSON.parse(res.body)
        var fields = res.body.data
        //looping through all the objects
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i]
          fieldComponent.push(field);
        }
      }
    })

    const component = ({fieldComponent}) =>(
      <div>
        <h1>this needs to be the one</h1>
      {fieldComponent.map((elem) => (
        <li>elem.name</li>
      ))}
    </div>
  )

  console.log({fieldComponent.map((function(elem, i))})


    //console.log(components)

    return (<div>
            <h1>this needs to be the one</h1>
          {fieldComponent.map((elem) => (
            <h5>{elem.type}</h5>
          ))}
        </div>)
  }*/

  render() {
    let items = this.state.fieldComponents
    let page = ''
    if (this.state.isLoading == true){
      page = <Spinner className="patientsLoader" name="ball-clip-rotate-multiple" color="steelblue"></Spinner>
    } else {
      page = <div>{items.map(item => <Fields key={item.name} fields={item}/>)}</div>
    }

    return (
      <div className="patientsData">
        <Panel header="header title (in development)" bsStyle="primary">

      <Grid>
         <Row>

          {page}
        </Row>
      </Grid>


      </Panel>
    </div>


    )
  }

}

class Fields extends Component{
  constructor(props){
  super(props)
}

  render(){
    var fieldType = this.props.fields.type
    var fieldName = this.props.fields.name
    var fieldString = this.props.fields.string
    var fieldDate = this.props.fields.date
    var fieldText = this.props.fields.text
    var page = ''

    switch (fieldType){

      case "string" :
      //this.props.fields.name
      //his.props.fields.string
      page = <Col md={2} xs={12}><h5>{fieldName}</h5> <h4>{fieldString}</h4></Col>
      break
      case "date":
      //this.props.fields.name
      //his.props.fields.date
      page = <Col md={2} xs={12}><h5>{fieldName}</h5> <h4>{fieldDate}</h4></Col>
      break
      case "text":
      //this.props.fields.name
      //his.props.fields.text
      page = <Col md={2} xs={12}><h5>{fieldName}</h5> <h4>{fieldText}</h4></Col>
      break
      default:
      console.log("the field type is unknown")
    }
    console.log(this.props.fields)
    return (<h1>{page}</h1>)
  }
}


const PatientData = ({match}) => (

  <div className="panel panel-default changeUser">
    <div className="panel-heading">
      {/*<h1>Edit {match.params.patientID}&apos;s details</h1>*/}
      General heading
    </div>

    <div className="panel-body">
      <div className="col-xs-6 col-sm-6 col-md-6 right-divider">

        <form role="form">
          <div className="row top-buffer">

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="form-group">
                <h5>First Name</h5>
                <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="James"></input>
              </div>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="form-group">
                <h5>Last Name</h5>
                <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Roxburgh"></input>
              </div>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="form-group">
                <h5>Other Name</h5>
                <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="none"></input>
              </div>
            </div>

          </div>

          <div className="row top-buffer">
            <div className="col-xs-4 col-sm- col-md-4">
              <div className="dropdown">
                <h5>Date of birth</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">date of birth
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">

              <div className="input-group">
                <h5>Gender</h5>
                <div id="radioBtn" className="btn-group">
                  <a className="btn btn-default btn-md ">Male</a>
                  <a className="btn btn-default btn-md ">Female</a>
                </div>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">

              <div className="dropdown">
                <h5>Ethnicity</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Ethnicity
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="row top-buffer">

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="dropdown">
                <h5>Genotype</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Genotype
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="dropdown">
                <h5>Group</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Group
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="dropdown">
                <h5>Training start date</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">start date
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="row top-buffer">

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="dropdown">
                <h5>Height</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Height
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="dropdown">
                <h5>Weight</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Weight
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="dropdown">
                <h5>Network centre</h5>
                <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Network centre
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row top-buffer">

            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <label for="comment">Comment for log:</label>
                <textarea className="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
          </div>

        </form>
      </div>

      <div className="col-xs-6 col-sm-6 col-md-6">

        <h4>Prescription</h4>

        <div className="row top-buffer">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <h5>Frequency of sessions (per day)</h5>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="dropdown">

              <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Frequency
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="col-xs-6 col-sm-6 col-md-6">

        <div className="row top-buffer">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <h5>Number of breaths/sessions</h5>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="dropdown">

              <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Breaths/session
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="col-xs-6 col-sm-6 col-md-6">
        <div className="row top-buffer">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <h5>Device</h5>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="dropdown">

              <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Device
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="row top-buffer">
        <div className="col-xs-6 col-sm-6 col-md-6">
          <div className="form-group">
            <label for="comment">Comment:</label>
            <textarea className="form-control prescription" rows="15" id="comment"></textarea>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <input type="submit" value="Delete patient" className="btn btn-block btn-danger"></input>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <input type="submit" value="Save changes" className="btn btn-block btn-success"></input>
          </div>
        </div>

      </div>
    </div>
  </div>

)
