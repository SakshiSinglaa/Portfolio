import React, { useState } from 'react'
import './Navbar.css'
import myLogo1 from '../../Assets/myLogo1.png'
// import underline from '../../Assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../Assets/menu_open.svg'
import menu_close from '../../Assets/menu_close.svg'
import { useRef } from 'react'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>

      <img src={myLogo1} alt='logo' />
      <img src={menu_open} onClick={openMenu} alt='menu_open' className='nav-mob-open' />
    
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='menu_close' className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li> 
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>My Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Education & Experience</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>

      <div className="nav-connect"><a href="https://bio.link/sakshisingla">Connect with me!</a></div>
    </div>
  )
}

export default Navbar
