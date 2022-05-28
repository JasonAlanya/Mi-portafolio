import React, { useEffect } from 'react'

const Skill = ({title, color, percentege, imagen}) => {
  let i=0;
  useEffect(()=>{
    const elemento=document.getElementById(title);
    const cargarimagen = (entradas, observador) =>{
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting && i===0){
          //entrada.target.classList.add('efecto')
          i=1;
          let start=setInterval(actualiza,30);
          let upto = 0.5;
          function actualiza (){
            let counts = upto++;
            if(upto > percentege){
              clearInterval(start);
            }
            document.getElementById(title).style.background = 'conic-gradient('+color+' '+counts+'%,#fff '+counts+'%)';
          }
      }
      });
    }

    const observador = new IntersectionObserver(cargarimagen,{
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 1.0,
    })

    observador.observe(elemento)
  },[])


  return (
    <div className="Skill" >
      <h2 translate='no'>{title}</h2>
      <div id={title} className='progress_outer'>
        <div className='progress_inner'>
          <img src={imagen} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skill
