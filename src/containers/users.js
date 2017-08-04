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
import Login, {Auth} from '../containers/login.js'
import request from 'superagent'

export default class Users extends Component{
  constructor(props){
    super(props)

  }

  createInvCode(){
    let token = 'Bearer 7BErm0wMvbmONA633NOYNrEeYAlO1nqV'//"Bearer " + Auth.accessToken
    let infoToken = document.getElementById('authToken')
    infoToken.innerHTML = token

    let role = "researcher"//document.getElementById('roles').value

    request
    .post('https://api.fizzyo-ucl.co.uk/api/v1/invitation')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer 7BErm0wMvbmONA633NOYNrEeYAlO1nqV')
   .send(role)
   .end(function(err, res){
     if (err || !res.ok) {
          alert(err)
        } else {
          alert("success")
          infoToken.innerHTML = JSON.stringify(res.body)

        }
})
  /*  request
  .post('https://api.fizzyo-ucl.co.uk/api/v1/invitation')
  .set('Authorization', token)
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .send("researcher")
  .end(function(err, res){
    if (err || !res.ok) {
         alert(err)
       } else {
         alert("success")
         infoToken.innerHTML = JSON.stringify(res.body)

       }
     });*/
  }



  render(){
    return(
      <div className="addUserPanel">
      <Panel header = "Create an invite for a user" bsStyle = "primary" >
        <Alert bsStyle="info">
          <p><strong>To create an invite: </strong> generate the code for the specified role and pass it to the user to register. </p>
          <strong>They will need to have Windows Live account! </strong>
        </Alert>
      <Form horizontal>
        <FormGroup controlId="formhorizontalName">
        <Col lg={12}>
          <FormControl type="text" placeholder="First Name"/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formhorizontalSurname">
      <Col lg={12}>
        <FormControl type="surname" placeholder="Last Name"/>
      </Col>
      </FormGroup>
      </Form>

      <Form horizontal className="top-buffer">


        <FormGroup controlId="formhorizontalEmail">
        <Col lg={12} lg={12}>
          <FormControl type="email" placeholder="email"/>
        </Col>
      </FormGroup>


        <FormGroup controlId="formhorizontalEmail">
        <Col lg={12} lg={12}>
          <FormControl.Static>
              <DropdownButtonComp id="roles" title="Select Role" option={["researcher", "administrator", "patient"]}/>
            </FormControl.Static>
        </Col>
        </FormGroup>


      </Form>



      <Col lg={12}>
        <input type="submit" value="Create Invitation Code" className="btn btn-block btn-success top-buffer addUser" onClick={this.createInvCode}></input>
        <p>Generated Invitation Code: <strong id="test-user-login"></strong>---</p>
        <p>You Auth token <strong id="authToken">---</strong></p>
      </Col>

        </Panel>
      </div>


    )
  }
}

const Users2 = () => (

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
        <div className="col-xs-6 col-lg-6 col-md-6">
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
