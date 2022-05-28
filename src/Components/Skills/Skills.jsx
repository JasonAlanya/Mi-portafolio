import React from 'react'
import Title from '../Title'
import Skill from './Skill'
import htmlimage from '../../Images/html-5.png'
import cssimage from '../../Images/css3.png'
import jsimage from '../../Images/js.png'
import reactjsimage from '../../Images/Reactjs.png'
import sassimage from '../../Images/Sass.png'
import gitimage from '../../Images/Git.png'
import pythonimage from '../../Images/python.png'
import cppimage from '../../Images/cpp.png'
import tiaportal from '../../Images/tiaportal.jpg'
import codesys from '../../Images/Codesys.png'
import labview from '../../Images/Labview.png'
import factory from '../../Images/factory.png'
import autocad from '../../Images/autocad.png'
import inventor from '../../Images/inventor.png'
import solidworks from '../../Images/solidworks.png'

const Skills = () => {

  return (
    <div id='Skills'>
      <Title texto="Skills"/>
      <div className="Skillcontainer">
        <Skill title="HTML" color="RGB(230,81,0)" percentege={90} imagen={htmlimage}/>
        <Skill title="CSS" color="RGB(2,119,189)" percentege={90} imagen={cssimage}/>
        <Skill title="Java Script" color="RGB(254,218,62)" percentege={65} imagen={jsimage}/>
        <Skill title="React JS" color="RGB(97,218,251)" percentege={65} imagen={reactjsimage}/>
        <Skill title="SASS" color="RGB(204,102,153)" percentege={90} imagen={sassimage}/>
        <Skill title="Git" color="RGB(40,40,40)" percentege={90} imagen={gitimage}/>
        <Skill title="Python" color="RGB(34,88,102)" percentege={70} imagen={pythonimage}/>
        <Skill title="C++" color="RGB(0,68,127)" percentege={80} imagen={cppimage}/>
        <Skill title="Tia Portal" color="RGB(59,66,84)" percentege={90} imagen={tiaportal}/>
        <Skill title="Codesys" color="RGB(224,15,34)" percentege={90} imagen={codesys}/>
        <Skill title="LabView" color="RGB(255,213,0)" percentege={60} imagen={labview}/>
        <Skill title="Factory IO" color="RGB(44,165,208)" percentege={80} imagen={factory}/>
        <Skill title="Autocad" color="RGB(136,34,34)" percentege={95} imagen={autocad}/>
        <Skill title="Inventor" color="RGB(213,98,38)" percentege={60} imagen={inventor}/>
        <Skill title="SolidWorks" color="RGB(255,10,10)" percentege={85} imagen={solidworks}/>
      </div>
    </div>
  )
}

export default Skills
