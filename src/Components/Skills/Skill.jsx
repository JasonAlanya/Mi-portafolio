import React from 'react'

const Skill = ({title, color, percentege, imagen}) => {
  let start=setInterval(actualiza,10);
  let upto = 1;
  function actualiza (){
    let counts = upto++;
    console.log(counts)
    if(upto > percentege){
      clearInterval(start);
    }
    document.getElementById(title).style.background = 'conic-gradient('+color+' '+counts+'%,#fff '+counts+'%)';
  }

  return (
    <div className="Skill">
      <h2>{title}</h2>
      <div id={title} className='progress_outer'>
        <div className='progress_inner'>
          <img src={imagen} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skill
