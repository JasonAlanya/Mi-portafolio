import React from 'react'
import Title from '../Title'
import foto from '../../Images/Foto.jpg'

const Aboutme = () => {
  return (
    <div id="Aboutme">
      <Title texto={"About Me"}/>
      <div className='contenedor_aboutme'>
        <figure><div><img src={foto} alt="Mi fotografía" /></div></figure>
        <p>Hello! I'm Jason Alanya, a mechatronics engineer who loves programming, electronics and process automation. I consider myself a proactive, dedicated and self-taught person; which has allowed me to develop multidisciplinary projects based on web development and IoT.</p>
        <div className='cuadro'></div>
      </div>
    </div>
  )
}

export default Aboutme
