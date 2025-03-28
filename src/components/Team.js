import React from 'react'
import teamData from './teamData';
import TeamCard from './teamCard';

export default function Team() {
  return (
    <section id='team' className='team'>

      <h1 className='heading'>Our Team</h1>
      <div className='row'>
        {teamData.map((card) =>
          <TeamCard
            key={card.id}
            {...card}
          />)}
          
        {/* <div className='card'>
      <div className='image'>
        <img src='' alt='' />
      </div>
      <div className='info'>
        <h3>someone's name</h3>
        <span>web designer</span>
        <div className='icons'>
          <a href='#' className='fab fa-facebook'></a>
          <a href='#' className='fab fa-twitter '></a>
          <a href='#' className='fab fa-instagram '></a>
        </div>
      </div>
    </div>

    <div className='card'>
      <div className='image'>
        <img src='' alt='' />
      </div>
      <div className='info'>
        <h3>someone's name</h3>
        <span>web designer</span>
        <div className='icons'>
          <a href='#' className='fab fa-facebook'></a>
          <a href='#' className='fab fa-twitter '></a>
          <a href='#' className='fab fa-instagram '></a>
        </div>
      </div>
    </div> */}

      </div>
    </section>
  )
}