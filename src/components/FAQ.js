import React from 'react'

export default function FAQ() {
  return (
    <section id='faq' className='faq'>
      <h1 className='heading'> FAQ</h1>
      <div className='row'>

        <div className='image'>
          <img src='images/faq.png' alt='' />
        </div>
        <div className='accordion-container'>
          <div className='accordion'>
            <div className='accordion-header'>
              <span>+</span>
              <h3>How much will it cost?</h3>
              <div className='accordion-body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className='accordion'>
            <div className='accordion-header'>
              <span>+</span>
              <h3>How long does it take to design?</h3>
              <div className='accordion-body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className='accordion'>
            <div className='accordion-header'>
              <span>+</span>
              <h3>Is it SEO friendly?</h3>
              <div className='accordion-body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}