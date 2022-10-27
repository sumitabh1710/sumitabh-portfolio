import React from 'react'
import './Portfolio.css'
import portfolio1 from '../../assests/portfolio2.jpg'
import portfolio2 from '../../assests/portfolio4.jpg'
import portfolio3 from '../../assests/portfolio5.png'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__details'>
                    <div className='project__cards'>
                        <img src={portfolio1} />
                        <div className='project__details'>
                            <h2>Online Judge</h2>
                            <small>Built an Online judge that remote runs code securely and judges if the given
                                code is correct/wrong/inefficient.</small>
                            <small> Used python for implementation by exploring DOCKER and
                                SANDBOXING techniques.
                            </small>
                            <small> Techstack : python, django, web framework, docker, postgresql and
                                deployed at production in AWS Cloud.</small>
                            <a href="https://github.com/sumitabh1710/Online-Judge" target="__blank" className='btn github__link'>Github Link</a>
                        </div>
                    </div>

                    <div className='project__cards'>
                        <img src={portfolio2} />
                        <div className='project__details'>
                            <h2>BLOG MANAGER</h2>
                            <small>Built a Blog managing Website that manages blogs for users.</small>
                            <small> (MVT)-model,view,template architecture is used to access (POST/GET)
                                requests which is passed as obect to the fuction and facilitates the respond.
                            </small>
                            <small> Backend compatibility provided using Django framework.</small>
                            <a href="https://github.com/sumitabh1710/Online-Judge" target="__blank" className='btn github__link'>Github Link</a>
                        </div>
                    </div>

                    <div className='project__cards'>
                        <img src={portfolio3} />
                        <div className='project__details'>
                            <h2>Notes</h2>
                            <small>Built an simple websites where you can create, update and delete notes.</small>
                            <small>Used react for implementation and HTML/CSS for frontend. Used different react Hooks to get some complex tasks done easily.</small>
                            <small></small>
                            <a href="https://github.com/sumitabh1710/Online-Judge" target="__blank" className='btn github__link'>Github Link</a>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    )
}

export default Portfolio