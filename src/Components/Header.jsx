import React from 'react'
import logo from '../Images/Imagen1.png'

const Header = () => {

  let menuOpen = false;
  
  const menuBtn = (e) => {
    if(!menuOpen){
      e.target.classList.add('open');
      document.querySelector(".Sections").classList.add('visible');
      document.querySelector(".Header").classList.add('oscuro');
      //document.querySelector("body").classList.add('scrollbar');
      menuOpen=true;
    }
    else{
      sectionclick();
    }
  }

  const sectionclick = () =>{
    if(menuOpen){
      document.querySelector(".open").classList.remove('open');
      document.querySelector(".Sections").classList.remove('visible');
      if(window.innerHeight*0.9>window.scrollY){
        document.querySelector(".Header").classList.remove('oscuro');
      }
      //document.querySelector("body").classList.remove('scrollbar');
      menuOpen=false;
    }
  }

  window.onscroll = ()=>{
    let y = window.scrollY;
    let x = window.innerHeight*0.9;
    if(x<y){
      console.log(1)
      document.querySelector(".Header").classList.add('oscuro');
    }
    else{
      console.log(2)
      document.querySelector(".Header").classList.remove('oscuro');
    }
  }

  return (
    <nav className='Header'>
      <a className='Logo' href='#Home'><img src={logo} alt="" /></a>
      <div className='Btn_burger' onClick={menuBtn}></div>
      <ul className='Sections'>
        <li><a href="#Home" onClick={sectionclick}>Home</a></li>
        <li><a href="#Aboutme" onClick={sectionclick}>About me</a></li>
        <li><a href="#Skills" onClick={sectionclick}>Skills</a></li>
        <li><a href="#Projects" onClick={sectionclick}>Projects</a></li>
        <li><a href="#Contact" onClick={sectionclick}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Header
