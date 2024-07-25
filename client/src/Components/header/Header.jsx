import React from 'react'
import "./header.css"


const Header = () => {
  return (
    <div className='Header'>
        <div className='Header_left'>
            <small> 
                DRIBBBLE / MEDIUM / TWITTER / FACEBOOK / LINKEDIN / FIYASKHANF@GMAIL.COM
            </small>
        <h1>
            Fiyas is a Multidiscipalinary <br />
            Product Designer & Full-Stack <br />
            Developer
        </h1>
        <div className='Header_aboutContent'>
            <div className='header_about'>
               <h4>About</h4>
               <div>
                <p>As both designer and developer of projects that require a <br />
                leser focus on both, I unite form and function to meet both <br />
                user Needs an bussiness goals.
                </p>
                <p>Currently improving customer experience as a junior web <br /> 
                Developer at <span>BrightEdge.</span></p>
               </div>
            </div>
            <div className='header_specialize'>
                <h4>Specializing in</h4>
                <div>
                    <p>Research <br />Prototyping & Testing <br />
                    Responsive Web Design</p>
                </div>
            </div>
            <div className='header_skills'>
                <p>Front-end development <br />
                Back-end development</p>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Header