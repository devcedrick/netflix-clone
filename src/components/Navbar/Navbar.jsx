import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
  const navbarRef = useRef();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const maxScroll = 800;
    const opacity = Math.min(1, currentScrollPos/maxScroll);
    navbarRef.current.style.backgroundColor = `rgba(20, 20, 20, ${opacity})`;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [] );
  return (
    <div ref={navbarRef}  className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className='icons'/>
        <div className="navbar-profile">
            <img src={profile_img} alt="Profile Icon" className='profile'/>
            <img src={caret_icon} alt="Dropdown Icon"/>
            <div className="dropdown">
                <p>Sign Out of Netflix</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
