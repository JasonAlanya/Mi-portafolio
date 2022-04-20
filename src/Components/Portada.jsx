import React from 'react'
import {ParticlesContainer} from './Triangle'
import "../SASS/Portada.scss"

const Portada = () => {

  
  return (
    <div className='portada'>
      <h1>Jason Alanya</h1>
      <h2>Ingeniero Mecatrónico / Desarrollador Web</h2>
      <button>Sobre mi</button>
      <ParticlesContainer className="Particulas"/>
    </div>
  )
}

export default Portada
