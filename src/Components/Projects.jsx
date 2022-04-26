import React from 'react'
import Title from './Title'

const Projects = () => {
  return (
    <div id="Projects">
      <Title texto={"My Projects"}/>
      <div className='timeline'>
        <ul>
          <li>
            <div className='content'>
              <h3>Implementation of a Fire Prevention System using IoT and IFTTT</h3>
              <p>This system develops a unique model applying low-cost technology; furthermore, the use and interaction of this system with the user, through a web platform, are easy. The model was carried out by analyzing the different devices on the market that have the characteristic of sending and receiving data in the cloud</p>
            </div>
            <div className='time'>
              <h4>May 2021</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Mechatronic Exoskeletons for Lower-Limb Rehabilitation: An Innovative Review</h3>
              <p> The purpose of this article is to document a systematic review of the trends in the application of components that are part of the development of exoskeletons applied to the rehabilitation of lower-limbs. The objective is to provide the researcher with a structured matrix that integrates these components related to lower-limb exoskeletons development.</p>
            </div>
            <div className='time'>
              <h4>April 2021</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Design of an Automated Drip Irrigation System in Tarma Valley by Controlling Soil Moisture</h3>
              <p>This article explains and describes the advantages and benefits of designing a soil moisture control system for the drip irrigation system in Tarma Valley. The main results indicate that it is possible to control the humidity level of the soil to 100% and to carry out the hydric restriction to 40% during the period of hardening of the soil.</p>
            </div>
            <div className='time'>
              <h4>November 2021</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Design, Simulation and Control of a 2 DOF Robotic Arm for Correction and Training of Craft Turning</h3>
              <p>This article presents the design and control of a 2 DOF robotic arm, which will be responsible for performing the turning of various parts in simulation to optimize the working time, and the safety of people, also, it will serve for the training of machining parts since the robotic arm would simulate the activities that an operator performs traditionally at the time of executing the machining action.</p>
            </div>
            <div className='time'>
              <h4>December 2021</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Portable Heating System with Carbon Fiber to Reduce the Mortality of Alpacas in the High Andean Areas</h3>
              <p>This work develops a heating system to prevent the death of alpacas, which is automatic, portable, and based on carbon fiber. The system is ergonomic for alpacas, which allows it to be adapted according to its size, in addition to having adequate components with a minimum size so as not to disturb the alpacas, it has a waterproof coating for rainy seasons and is scalable.</p>
            </div>
            <div className='time'>
              <h4>December 2021</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Development of an IoT system using ESP8266 for the detection of asthma triggering allergens in childrenas</h3>
              <p>The system presented in this article seeks to measure air quality both inside the home of children with asthma and when it goes out, to avoid concerns on the part of parents or guardians in charge and to alert them in case of inconvenience. any. The system is responsible for uploading the reading of each of the sensors to a database in the cloud so that they are later published in a PWA and comparison and/or monitoring of the data can be carried out.</p>
            </div>
            <div className='time'>
              <h4>December 2021</h4>
            </div>
          </li>
          <div style={{'clear': 'both'}}></div>
        </ul>

      </div>
    </div>
  )
}

export default Projects