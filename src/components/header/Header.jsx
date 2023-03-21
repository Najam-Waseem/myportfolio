import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/najamBg.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
        <Typewriter 
        options={{autoStart:true,
        loop:true,
        delay:100,
        pauseFor: 5000,
        deleteSpeed:100,
        strings:[
          "Najam Waseem",
        ]
        }}
        />
        </h1>
        <h5 className="text-light">
        <Typewriter 
        options={{autoStart:true,
        loop:true,
        delay:100,
        pauseFor: 1000,
        deleteSpeed:100,
        strings:[
          "Front End Developer",
        ]
        }}
        />
        </h5>
        <CTA />
        <HeaderSocials/>        
        <div className="me">
          <img src={ME} alt="Najam" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
