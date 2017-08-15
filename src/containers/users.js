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
import Login, {AuthTest} from '../containers/login.js'
import WinLiveLogin, {Auth} from '../containers/winLiveLogin.js'
import request from 'superagent'
import CopyToClipboard from 'react-copy-to-clipboard';

export default class Users extends Component{
  constructor(props){
    super(props)

    /**
    * Setting Value and Copied states for Copy to CLipboard functionality
    * binding functions to be able to uset setState()
    */
    this.state = {value:'', copied: false}
    this.Copy = this.Copy.bind(this)
    this.createInvCode = this.createInvCode.bind(this)
    this.onChange = this.onChange.bind(this)
  }

onChange(){
  //updating the value of the generate code for clipboard copying
  let val = document.getElementById('invCode').value
  this.setState({value:val, copied: false});
}

Copy() {
  //restricting update if the state.value hasn't been changed
  if(this.state.value!=''){
  this.setState({copied: true});}
}

/**
*
*Code to create an invite via API POST request
*(The superagent send OPTIONS request first for security and then proceeds with the POST)
*
*/
  createInvCode(e){
    e.preventDefault()
    let token = "Bearer " + Auth.accessToken //as required by https://api.fizzyo-ucl.co.uk/
    let generatedCode = document.getElementById('invCode')
    var self = this //to allow changing global state inside the function

    let role = document.getElementById('roles').value
    request
    .post('https://api.fizzyo-ucl.co.uk/api/v1/invitation')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token)
    .send({role})
    .end(function(err, res){
     if (err || !res.ok) {
          alert(err)
        } else {
          generatedCode.value = JSON.stringify(res.body.code)
          self.setState({value:generatedCode.value, copied: false})
        }
      })
    }



  render(){
    return(
      <div className="PatientRecords">
      <Panel header = "Create an invite for a user" bsStyle = "primary" >

        <Alert bsStyle="info">
          <p><strong>To create an invite: </strong> generate the code for the specified role and pass it to the user to register. </p>
          <strong>They will need to have Windows Live account! </strong>
        </Alert>
      <Form horizontal>

        <FormGroup controlId="formhorizontalRoles">
        <Col lg={12} sm={10}>
          <FormControl.Static>
              <DropdownButtonComp id="roles" title="Select Role" option={["researcher", "administrator", "patient"]}/>
            </FormControl.Static>
        </Col>
        </FormGroup>

        <FormGroup controlId="formhorizontalSubmit">
        <Col lg={12} sm={10}>
          <FormControl.Static>
              <input type="submit" value="Create Invitation Code" className="btn btn-block btn-success top-buffer addUser" onClick={this.createInvCode}></input>
            </FormControl.Static>
        </Col>
        </FormGroup>

        <FormGroup controlId="formhorizontalCode">
        <Col lg={12} sm={10}>
          <FormControl.Static>
            <FormControl id="invCode" placeholder="generated code" onChange={this.onChange}/>
            </FormControl.Static>
        </Col>
        </FormGroup>

        <FormGroup controlId="formhorizontalCopy">
          <Col lg={6} sm={10}>
          <FormControl.Static>
            <CopyToClipboard text={this.state.value} onCopy={this.Copy}>
              <Button>Copy</Button>
            </CopyToClipboard>
            </FormControl.Static>
        </Col>
        </FormGroup>
      </Form>
      <Col lgOffset={3} sm={10}>
      {this.state.copied ? <CopiedMessage/>: <Info/>}
    </Col>
  </Panel>
</div>
    )
  }
}

//To support UX
function Info (){
  return (
    <Col className="top-buffer center" lg={6}>
    <Alert bsStyle="warning">
      <p id="copyMsg"><strong>Click copy </strong> and send to the user to register at www.fizzyo-ucl.ac.uk </p>
    </Alert>
    </Col>
  )
}

//Notify user on sucessfull copying
function CopiedMessage (){
  return (
    <Col className="top-buffer center" lg={6}>
    <Alert bsStyle="success">
      <p id="copyMsg"><strong>Copied to clipboard</strong></p>
    </Alert>
    </Col>
  )
}

//Previous version with a more standard registration screen
const UsersPrevVersion = () => (

  <div className="panel panel-default addUser">
    <div className="panel-heading">
      <h1>Add User</h1>
    </div>

    <div className="panel-body">
      <form role="form">
        <div className="row">

          <div className="col-xs-6 col-lg-6 col-md-6">
            <div className="form-group">
              <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name"></input>
            </div>
          </div>

          <div className="col-xs-6 col-lg-6 col-md-6">
            <div className="form-group">
              <input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name"></input>
            </div>

          </div>
        </div>

        <div className="row">

          <div className="col-xs-6 col-lg-6 col-md-6">
            <div className="form-group">
          <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address"></input>
          </div>
        </div>
        <div className="col-xs-6 col-lg-12 col-md-12">
          <div className="form-group">
            <DropdownButtonComp id="role-testing" title="Select Role" option={["researcher", "administrator", "patient" ]}/>
          </div>
        </div>
      </div>

        <div className="row">

          <div className="col-xs-6 col-lg-6 col-md-6">
            <div className="form-group">
              <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password"></input>
            </div>
          </div>

          <div className="col-xs-6 col-lg-6 col-md-6">
            <div className="form-group">
              <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-lg" placeholder="Confirm Password"></input>
            </div>
          </div>

        </div>

        <input type="submit" value="Add User" className="btn btn-block btn-success"></input>
      </form>
    </div>
  </div>
)
