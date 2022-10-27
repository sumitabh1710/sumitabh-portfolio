import React from 'react'
import "./Footer.css"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo' >SUMITABH BISWAS</a>
      <ul className='permalinks'>
        <li><a href='#' >Home</a></li>
        <li><a href='#about' >About</a></li>
        <li><a href='#contact' >Contact</a></li>
        <li><a href='#experience' >Experience</a></li>
        <li><a href='#portfolio' >Portfolio</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://github.com/sumitabh1710' target='_blank' ><AiFillGithub/></a>
        <a href='https://www.linkedin.com/in/sumitabh-biswas-9a00b512b/' target='_blank'><AiFillLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer