import React, { useEffect } from 'react'
import Title from '../Title'
import foto from '../../Images/Foto.jpg'

const Aboutme = () => {

  useEffect(()=>{
    const elemento=document.getElementById("foto");
    const elemento2=document.getElementById("miparrafo");
    const cargarimagen = (entradas, observador) =>{
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          entrada.target.classList.add('subir');
          elemento2.classList.add('subir')
      }
      });
    }

    const observador = new IntersectionObserver(cargarimagen,{
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 1.0,
    })

    observador.observe(elemento);
  },[])

  return (
    <div id="Aboutme">
      <Title texto={"About Me"}/>
      <div className='contenedor_aboutme'>
        <figure id="foto"><div><img src={foto} alt="Mi fotografía" /></div></figure>
        <p id="miparrafo">Hello! I'm Jason Alanya, a mechatronics engineer who loves programming, electronics and process automation. I consider myself a proactive, dedicated and self-taught person; which has allowed me to develop multidisciplinary projects based on web development and IoT.</p>
        <div className='cuadro'></div>
      </div>
    </div>
  )
}

export default Aboutme
