import React from 'react'
import CV from '../../assests/Sumitabh_resume.pdf'

const Buttons = () => {
  return (
    <div className='Buttons'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Buttons
