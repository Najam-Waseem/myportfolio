import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/njw422/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Najam-Waseem/" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/najam.waseem.3/" target="_blank"><BsFacebook/></a>
      
    </div>
  )
}

export default HeaderSocials
