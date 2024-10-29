import React from 'react'
import './Hero.css'
import profile_img from '../../Assets/profile_img.jpg'
import myResume from '../../Assets/myResume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='profile' />
        <h1><span>I'm Sakshi Singla,</span> a front-end developer.</h1>
        <p>I’m Sakshi Singla, a B.Tech. CSE Graduate with a passion for Web Development and WordPress. As a Front-end Developer, I specialize in building responsive websites using HTML, CSS, JavaScript, and React. I have hands-on experience in WordPress development and a strong interest in MySQL for efficient data management. I enjoy creating user-friendly digital solutions with a focus on performance and design.</p>

        <div className="hero-action">
            <div className="hero-connect"><a href="https://bio.link/sakshisingla">Connect with me</a></div>
            <div className="hero-resume"><a href={myResume}>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
