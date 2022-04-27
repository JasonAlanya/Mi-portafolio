import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Popup = () => {

    const cerrar = (e)=>{
        let overlay = document.getElementById('overlay');
	    let popup = document.getElementById('popup');
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    }

  return (
    <div className="overlay" id="overlay">
			<div className="popup" id="popup">
				<a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup" onClick={cerrar}><FontAwesomeIcon icon={faTimes} /></a>
				<h3>Tell me more about you project</h3>
				<h4>Ready to get started?</h4>
				<form action="">
					<div className="contenedor-inputs">
                        <div className='inputcontainer'>
                            <h5>Name</h5>
                            <input type="text" placeholder=""/>
                        </div>
                        <div className='inputcontainer'>
                            <h5>Email</h5>
                            <input type="email" placeholder="example@email.com"/>
                        </div>
                        <div className='inputdetails'>
                            <h5>Additional details</h5>
                            <textarea name="text" id="" cols="30" rows="5"></textarea>
                        </div>
					</div>
					<input type="submit" className="btn-submit" value="Suscribirse" onClick={cerrar}/>
				</form>
			</div>
	</div>
  )
}

export default Popup
