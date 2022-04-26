import React from 'react';

const Title = ({texto}) => {
  return (
    <div className='Title'>
        <div className='titleguion'></div>
        <h1>{texto}</h1>
        <div className='titleguion'></div>
    </div>
    
  )
}

export default Title
