import React from 'react'

export default function TeamCard({ name, occupation }) {
    return (
        
        <div className='card'>
            <div className='image'>
                <img src='' alt='' />
            </div>
            <div className='info'>
                <h3>{name}</h3>
                <span>{occupation}</span>
                <div className='icons'>
                    <a href='#' className='fab fa-facebook'></a>
                    <a href='#' className='fab fa-twitter '></a>
                    <a href='#' className='fab fa-instagram '></a>
                </div>
            </div>
        </div>
    )
}



