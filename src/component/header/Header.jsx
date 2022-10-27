import React from 'react'
import "./Header.css"
import Buttons from "./Buttons"
import ME from '../../assests/new.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Sumitabh Biswas</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Buttons/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="" />
        </div>
        <h5 className='scroll__down'>Scroll Down</h5>
      </div>
    </header>
  )
}

export default Header