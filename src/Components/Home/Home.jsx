import React from 'react'
import {ParticlesContainer} from './Triangle'
import Typical from 'react-typical'

const Home = () => {
  return (
    <div id='Home'>
      <h1>Hi, I'm</h1>
      <h2>Jason Alanya</h2>
      <Typical
        steps={['Mechatronics Engineer', 3000, 'Web Designer', 2000, 'Machine Learning Engineer', 4000]}
        loop={Infinity}
        wrapper="p"
      />
      <a href=''>Download Resume</a>
      <ParticlesContainer className="Particulas"/>
    </div>
  )
}

export default Home
