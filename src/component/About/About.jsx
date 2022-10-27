import React from 'react'
import "./About.css"
import ME from '../../assests/new.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Online Judge</h5>
              <small>Simple coding platform, same as LeetCode</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Blog Manager</h5>
              <small>You can create, update and delete blogs</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Notes</h5>
              <small>A simple React Website to create and delete Notes</small>
            </article>
          </div>

          <p>
            I'm a graduate engineer from Dayananda Sagar College of
            Engineering looking for an opportunity as an Software Engineer. I've always been passionate and
            enthusiastic about programming, solving some Programming question like in competitive coding and
            working in the Software Development field has been my goal.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About