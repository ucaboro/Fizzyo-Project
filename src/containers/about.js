import React, {Component} from 'react'
import {Grid, Row, Col, Panel, Button, Alert, FormGroup, FormControl} from 'react-bootstrap'
import logo from '../components/fizzyo_landing.JPG'
import Mabel from '../components/Mabel.JPG'
import Matt from '../components/Matt.jpg'
import Manuel from '../components/manuel.jpg'
import Tim from '../components/Tim.JPG'
import Anton from '../components/Anton.jpg'



export default class About extends Component{


  render(){
    return(

        <LandingTemplate/>

    )
  }
}


function LandingTemplate (){

return(
  <div>
     <header className="business-header">
         <div className="container">
             <div className="row">
                 <div className="col-lg-12">
                     <h1 className="display-3 text-center text-white mt-4">About Fizzyo Project</h1>
                     <img src={logo}/>
               </div>
             </div>
         </div>
     </header>

     <div className="container">

         <div className="row">
             <div className="col-sm-12">

                    <p> Cystic Fibrosis is a chronic, life-limiting condition affecting sufferers from birth. Approximately 1 in 2500 babies are born with CF. </p>

                    <p>  With improved prevention and treatment life expectancy for patients has slowly increased and currently stands at an average of 41 years of age.</p>

                    <p>CF physiotherapy is a series of breathing exercises undertaken as the main preventative treatment for CF. Patients are asked to do physio two or more times a day using dedicated breathing equipment to help expel mucus and fluid from their lungs.</p>

                    <p>Project Fizzyo attempts to tackle some key challenges associated with chronic preventative in-home care:</p>
                    <ul>
                    <li> How do we improve patient adherence to this form of life-long treatment when benefits are not immediate? </li>
                    <li> How do we use technology to connect the Clinician to the patient, so this traditionally analogue treatment can be monitored and made visible at point of clinical review, correlated with other health factors?</li>
                    <li> How can we study the long-term efficacy of CF Physiotherapy and its impact on patient health given no such data has ever been collected or analysed?</li>
                    </ul>
                    <p>The Fizzyo device is a wireless sensor that connects to existing CF Physiotherapy equipment, turning breaths into controls for video games. </p>

              </div>

         </div>

          <h2 className="mt-4 top-buffer center">Fizzyo UCL CS team</h2>
         <div className="row top-buffer center">
             <div className="col-md-6 col-lg-6 ">
                 <div className="card">
                     <img className="card-img-top" src={Mabel} alt=""/>
                     <div className="card-body">
                         <h4 className="card-title">Mabel Chan</h4>
                         <p className="card-text">Fizzyo Client</p>
                     </div>
                 </div>
             </div>
             <div className="col-md-6 col-lg-6 ">
                 <div className="card">
                     <img className="card-img-top" src={Tim} alt=""/>
                     <div className="card-body">
                         <h4 className="card-title">Tim Kuzhagaliyev</h4>
                         <p className="card-text">Fizzyo Cloud </p>
                     </div>
                 </div>
             </div>
          </div>

          <div className="row top-buffer center">
              <div className="col-md-4 col-lg-4 ">
                  <div className="card">
                      <img className="card-img-top" src={Matt} alt=""/>
                      <div className="card-body">
                          <h4 className="card-title">Matt Clayton</h4>
                          <p className="card-text">Fizzyo Breath Framework</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 col-lg-4 ">
                  <div className="card">
                      <img className="card-img-top" src={Anton} alt=""/>
                      <div className="card-body">
                          <h4 className="card-title">Anton Morozov</h4>
                          <p className="card-text">Fizzyo Portal</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 col-lg-4 ">
                  <div className="card">
                      <img className="card-img-top" src={Manuel} alt=""/>
                      <div className="card-body">
                          <h4 className="card-title">Manuel Crepin</h4>
                          <p className="card-text">Fizzyo Mini-Golf game</p>
                      </div>
                  </div>
              </div>
           </div>

     </div>


     <footer className="top-buffer py-5 bg-dark">
         <div className=" top-buffer container">
             <p className="m-0 text-center text-white top-buffer">Copyright &copy; fizzyo-ucl.co.uk 2017</p>
         </div>
     </footer>
</div>
)

}
