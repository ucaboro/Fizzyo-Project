import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Patients extends Component {
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1>
              Patient Records
              <button type="button" className="btn btn-success addPatient">Add New Patient</button>
            </h1>

          </div>

          <div className="panel-body">

            <div className="row">

              <div className="col">
                <div className="input-group">

                  <input type="text" className="form-control" placeholder="Search for patients..."></input>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </div>

              <div className="row top-buffer">

                <div className="col">

                  <table className="table table-hover table-striped table-bordered">

                    <thead>
                      <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>
                          <NavLink to="/patients/patientData">
                            John
                          </NavLink>
                        </td>
                        <td>Doe</td>
                        <td>john@example.com</td>

                      </tr>

                      <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/*<Route path="/patientData" component={PatientData}/>*/}
          </div>

        </div>

      </div>

    );
  }
}

const PatientData = () => (
  <div className="container">
    <h1>Patients Data here</h1>
  </div>

)

export default Patients;
