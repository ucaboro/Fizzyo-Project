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
import Dashboard from '../containers/dashboard.js'

export default class PatientsData extends Component {
  constructor(props) {
    super(props)

    this.viewDashboard = this.viewDashboard.bind(this)

    this.state = {
      fieldComponents: [],
      isLoading: false,
      view: "view"
    }
    //this.getFieldsFromAPI = this.getFieldsFromAPI.bind(this)

  }

  componentDidMount(){
    var id = this.props.match.params.patientID
    var fieldComponent = []
    var self = this
    this.setState({isLoading: true})
    //getting all the fields from the API
    request.get(`https://api.fizzyo-ucl.co.uk/api/v1/patient-records/${id}`)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', "Bearer " + Auth.accessToken)
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

  handleEditClick(){
    this.setState({view: "edit"})

    var id = this.props.match.params.patientID
    var fieldComponent = []
    var self = this
    this.setState({isLoading: true})
    //getting all the fields from the API
    request.get(`https://api.fizzyo-ucl.co.uk/api/v1/patient-records/${id}/edit`)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', "Bearer " + Auth.accessToken)
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


  viewDashboard(){
      this.setState({view: "dashboard"})
  }


  render() {
  let screen= ''
  //switching between the pages
  switch(this.state.view){
    case "view":
    //setting up viewing data screen
      let items = this.state.fieldComponents
      var page = ''
      if (this.state.isLoading == true){
        page = <Spinner className="patientsLoader" name="ball-clip-rotate-multiple" color="steelblue"></Spinner>
      } else {
        page = <div>{items.map(item => <Fields key={item.name} fields={item}/>)}</div>
      }

    break
    case "edit":

      if (this.state.isLoading == true){
        page = <Spinner className="patientsLoader" name="ball-clip-rotate-multiple" color="steelblue"></Spinner>
      } else {
        page = <div>{items.map(item => <Fields key={item.name} fields={item}/>)}</div>
      }
      break

    case "dashboard":

        if (this.state.isLoading == true){
          page = <Spinner className="patientsLoader" name="ball-clip-rotate-multiple" color="steelblue"></Spinner>
        } else {
          page = <div><Dashboard name={this.props.match.params.patientName}/></div>
        }
        break

  }

    var editBtn = ''
    if(Auth.user.role=="md-team"){
      editBtn = ''
    }else{
      editBtn =   <Button className="top-buffer" bsStyle="success" onClick={this.handleEditClick}>Edit {this.props.match.params.patientName}&apos;s details</Button>

    }

    return (

      <div className="PatientRecords">

        <Panel header={this.props.match.params.patientName + "'s details"} bsStyle="primary">
          <Row>
            {editBtn}
            &nbsp;
            <Button className="top-buffer" bsStyle="info" onClick={this.viewDashboard}>View {this.props.match.params.patientName}&apos;s dashboard</Button>
          </Row>
         <Row>
           {page}
          </Row>
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

    var date = new Date (this.props.fields.date)

    switch (fieldType){

      case "string" :

      if (fieldString!=null){
        page = <Col md={2} xs={12}><hr/><h5><b>{fieldName}</b></h5> <h4>{fieldString}</h4><hr/></Col>
      } else {
        page = <Col md={2} xs={12}><hr/><h5><b>{fieldName}</b></h5> <h4> -----</h4><hr/></Col>
      }
      break
      case "date":
      if (date!=null){
        page = <Col md={2} xs={12}><hr/><h5><b>{fieldName}</b></h5> <h4>{date.getFullYear()+'-'+date.getMonth()+1 + '-' + date.getDate()}</h4><hr/></Col>
      } else {
        page = <Col md={2} xs={12}><hr/><h5><b>{fieldName}</b></h5> <h4> -----</h4><hr/></Col>
      }
      break
      case "text":
      if (fieldText!=null){
        page = <Col md={2} xs={12}><hr/><h5><b>{fieldName}</b></h5> <h4>{fieldText}</h4><hr/></Col>
      } else {
        page = <Col md={2} xs={12}><hr/><h5><b>{fieldName}</b></h5> <h4> -----</h4><hr/></Col>
      }
      break
      default:
      console.log("the field type is unknown")
    }

    return (<p>{page}</p>)
  }
}
