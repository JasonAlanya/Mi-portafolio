import React from 'react'
import logo from '../Images/Logo.png'

const Header = () => {

  let menuOpen = false;
  
  const menuBtn = (e) => {
    if(!menuOpen){
      e.target.classList.add('open');
      document.querySelector(".Sections").classList.add('visible');
      document.querySelector("body").classList.add('scrollbar');
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
      document.querySelector("body").classList.remove('scrollbar');
      menuOpen=false;
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
