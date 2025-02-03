import React, { useState, useEffect } from 'react'

export default function Nav() {

    const [ham, setHam] = useState(false)
    function toggleHamMenu() {
        setHam(prevHam => !prevHam)
    }

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) { // adjust value for when to change color
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <header className={scrolled ? "header scrolled" : "header"}>
            <a href='#' className='logo'><i className='fas fa-magic'></i>Design</a>
            <div 
            className={ham ? "fas fa-times" : "fas fa-bars"} 
            onClick={toggleHamMenu}>
            </div>
            <nav className={ham ? "navbar active" : "navbar"}>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#service'>Services</a></li>
                    <li><a href='#team'>Team</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#faq'>FAQ</a></li>
                </ul>
            </nav>
        </header>
    )
}