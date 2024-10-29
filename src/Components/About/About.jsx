import React from 'react'
import './About.css'
import about_profile from '../../Assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
            <img src={about_profile} alt='profile' />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>Hello, I'm Sakshi Singla, a passionate B.Tech. CSE Graduate with a strong interest in Web Development and WordPress. As a skilled Front-end Developer, I have hands-on experience in creating responsive and user-friendly websites using HTML, CSS, JavaScript, and Bootstrap. I specialize in WordPress development, leveraging its flexibility to build dynamic and functional websites.</p>
                <p>In addition to front-end expertise, I also have a keen interest in MySQL and enjoy working with databases to optimize backend processes and enhance data management capabilities. With a problem-solving mindset and a focus on usability, I thrive in developing seamless web solutions that deliver a great user experience.</p>
                <p>Let’s connect and build something amazing together!</p>
            </div>

            <div className="about-skills">
                <div className="skill-list"><p>HTML & CSS</p><hr style={{width: "90%"}}></hr></div>
                <div className="skill-list"><p>JavaScript</p><hr style={{width: "60%"}}></hr></div>
                <div className="skill-list"><p>React JS</p><hr style={{width: "50%"}}></hr></div>
                <div className="skill-list"><p>MySQL</p><hr style={{width: "80%"}}></hr></div>
                <div className="skill-list"><p>C++</p><hr style={{width: "60%"}}></hr></div>
                <div className="skill-list"><p>Java</p><hr style={{width: "40%"}}></hr></div>
                <div className="skill-list"><p>DSA</p><hr style={{width: "50%"}}></hr></div>
                <div className="skill-list"><p>Git</p><hr style={{width: "40%"}}></hr></div>
            </div>
        </div>
      </div>

      {/*       
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>

        <div className="about-achievement">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>

        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div> 
      */}

    </div>
  )
}

export default About
