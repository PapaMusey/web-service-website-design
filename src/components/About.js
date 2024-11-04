import React from 'react'

export default function About() {
  return (
    <section id='about' className='about'>
      <h1 className='heading'>About Us </h1>
      <div className='row'>
        <div className='content'>
          <h3>We build websites that build your business</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <button className='btn'>Read more</button>
        </div>
        <div className='image'>
          <img src="/images/website.png" alt="about us" />
        </div>

      </div>
    </section>
  )
}