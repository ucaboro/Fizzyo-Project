import React, { Component } from 'react';

const PatientData = () => (

  <div className="panel panel-default changeUser">
              <div className="panel-heading">
                <h1>Edit User details</h1>
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
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                          <li><a href="#">HTML</a></li>
                          <li><a href="#">CSS</a></li>
                          <li><a href="#">JavaScript</a></li>
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
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                          <li><a href="#">HTML</a></li>
                          <li><a href="#">CSS</a></li>
                          <li><a href="#">JavaScript</a></li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="row top-buffer">

                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="dropdown">
                    <h5>Genotype</h5>
                      <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Genotype
                      <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="dropdown">
                    <h5>Group</h5>
                      <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Group
                      <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="dropdown">
                    <h5>Training start date</h5>
                      <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">start date
                      <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div>
                  </div>

                  </div>



                  <div className="row top-buffer">

                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="dropdown">
                    <h5>Height</h5>
                      <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Height
                      <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="dropdown">
                    <h5>Weight</h5>
                      <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Weight
                      <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="dropdown">
                    <h5>Network centre</h5>
                      <button className="btn btn-default dropdown-toggle customDrop" type="button" data-toggle="dropdown">Network centre
                      <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
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
                  <span className="caret"></span></button>
                  <ul className="dropdown-menu">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
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
                  <span className="caret"></span></button>
                  <ul className="dropdown-menu">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
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
                  <span className="caret"></span></button>
                  <ul className="dropdown-menu">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
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

export default PatientData;
