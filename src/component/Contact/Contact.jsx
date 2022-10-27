import React from 'react'
import "./Contact.css"
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sumitabh1710@gmail.com</h5>
            <a href='mailto:sumitabh1710@gmail.com' target='__blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-9742898532</h5>
            <a href='http://api.whatsapp.com/send?phone=+919742898532' target='__blank'>Send a Message</a>
          </article>
        </div>
        <div className='my__details__project'>
          <small>
              My experience of working a project named as Online Judge as a Full Stack Developer has taught me
            to think strategically about problems and identify solutions with strong logical & analytical concepts
            while creating a full fledge website. In this project, I Built an Online judge that remote runs code
            securely and judges if the given code is correct/wrong/inefficient. Used python and Django as
            framework for implementation by exploring DOCKER and SANDBOXING techniques, along with all
            these also used PostgreSQL, HTML, CSS, JavaScript for frontend as well. A single server can handle up
            to 2000 users during contest with HORIZONTAL SCALING. With a proactive approach, I've identified
            problems and bugs in the process.
          </small>
        </div>
      </div>
    </section>
  )
}

export default Contact