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
  Alert,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap';
import DropdownButtonComp from '../components/DropDown.js'
import WinLiveLogin, {Auth} from '../containers/winLiveLogin.js'
import request from 'superagent'
import Spinner from 'react-spinkit'
import DatePicker  from "react-bootstrap-date-picker"

export default class PatientEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldComponents: [],
      isLoading: false,
      view: "view"
    }
    //this.getFieldsFromAPI = this.getFieldsFromAPI.bind(this)

  }

  componentDidMount(){

    var fields = [
    {
      "id": "zxcvefgh-1234-5678-9101-qwert12345xy",
      "simpleName": "first-name",
      "displayName": "First name",
      "type": "string",
      "string": "Mike"
    },
    {
      "id": "zxcvefgh-1234-5678-9101-qwert12345xy",
      "simpleName": "dob",
      "displayName": "Date of birth",
      "type": "date",
      "date": "2017-07-28T18:39:40.978Z"
    },
    {
      "id": "zxcvefgh-1234-5678-9101-qwert12345xy",
      "simpleName": "gender",
      "displayName": "Gender",
      "type": "radio",
      "options": {
        "729a6738-38e2-45ab-b0f7-aa9028f7ad54": "Male",
        "ba7ef478-d8ea-47cb-bf17-cd0665de4db4": "Female"
      },
      "optionId": null
    },
    {
      "id": "zxcvefgh-1234-5678-9101-qwert12345xy",
      "simpleName": "ethnicity",
      "displayName": "Ethnicity",
      "type": "dropdown-other",
      "options": {
        "3b207935-f8d3-4064-95ed-e016fc5ffee1": "Ethnicity 1",
        "e50defd6-1a4a-41be-af3d-00fa716c944e": "Ethnicity 2"
      },
      "optionId": null,
      "useOther": false,
      "other": null
    },
    {
      "id": "zxcvefgh-1234-5678-9101-qwert12345xy",
      "simpleName": "height",
      "displayName": "Height",
      "type": "number",
      "number": "193"
    },
    {
      "id": "zxcvefgh-1234-5678-9101-qwert12345xy",
      "simpleName": "prescription-device",
      "displayName": "Device",
      "type": "dropdown",
      "options": {
        "ee83f454-7faf-44d8-b10b-a86af5cc7301": "Device 1",
        "c2894b24-7397-4268-82e6-db3a50af701f": "Device 2"
      },
      "optionId": null
    },
    {
      "id": "zxcvefgh-1234-5678-9101-qwert12345xy",
      "simpleName": "prescription-notes",
      "displayName": "Notes",
      "type": "text",
      "text": "Testing prescription notes"
    }
  ]
  this.setState({fieldComponents: fields, isLoading: false})

    /*var id = this.props.match.params.patientID
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
      })*/

  }

  handleEditClick(){
    this.setState({view: "edit"})
    this.setState({fieldComponents:''})
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
    //setting up viewing data screen
      items = this.state.fieldComponents
      page = ''
      if (this.state.isLoading == true){
        page = <Spinner className="patientsLoader" name="ball-clip-rotate-multiple" color="steelblue"></Spinner>
      } else {
        page = <div>{items.map(item => <Fields key={item.name} fields={item}/>)}</div>
      }
      break

    // TODO: add screen for the dashboard

  }

  //this.props.params.patientName

    return (

      <div className="PatientRecords">

        <Panel header={+ "'s details"} bsStyle="primary">
          <Row>
            <Button className="top-buffer" bsStyle="success" onClick={this.handleEditClick}>Edit {}&apos;s details</Button>
            &nbsp;
            <Button className="top-buffer" bsStyle="info">View {}&apos;s dashboard</Button>
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
    var fieldName = this.props.fields.displayName
    var fieldString = this.props.fields.string
    var fieldDate = this.props.fields.date
    var fieldText = this.props.fields.text
    var fieldDropDown = this.props.fields.dropdown
    //var fieldDropDown2 = this.props.fields.dropdown-other
    var fieldRadio = this.props.fields.radio
    var fieldRadioOptionId = this.props.fields.optionId
    var fieldRadioOptions = this.props.fields.options
    var fieldNumber = this.props.fields.number
    var page = ''

    var date = new Date (this.props.fields.date)

    switch (fieldType){

      case "string" :

      if (fieldString!=null){
        page = <Col md={2} xs={12}><h5><b>{fieldName}</b></h5> <h4> <FormControl type="text" placeholder={fieldString} /> </h4></Col>
      } else {
        page = <Col md={2} xs={12}><h5><b>{fieldName}</b></h5> <h4> -----</h4></Col>
      }
      break
      case "date":
      if (date!=null){
        page = <Col md={2} xs={12}><h5><b>{fieldName}</b></h5> <h4>{date.getFullYear()+'-'+date.getMonth()+1 + '-' + date.getDate()}</h4></Col>
      } else {
        page = <Col md={2} xs={12}><h5><b>{fieldName}</b></h5> <h4> -----</h4></Col>
      }
      break
      case "text":
      if (fieldText!=null){
        page = <Col md={2} xs={12}><h5><b>{fieldName}</b></h5> <h4>{fieldText}</h4></Col>
      } else {
        page = <Col md={2} xs={12}><h5><b>{fieldName}</b></h5> <h4> -----</h4></Col>
      }
      break
      case "radio":
      if (fieldRadioOptionId!=null){
        page = (<Col md={2} xs={12}><h5><b>{fieldName}</b></h5>
          <h4>{JSON.stringify(fieldRadioOptions)}</h4></Col>)
      } else {
        page = <Col md={2} xs={12}><h5><b>{fieldName}</b></h5> <h4> -----</h4></Col>
      }
      break
      default:
      console.log("the field type is unknown")
    }

    return (<p>{page}</p>)
  }
}
