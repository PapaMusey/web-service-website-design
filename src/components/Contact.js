import React, { useState } from 'react'

export default function Contact() {

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  })

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function validateForm() {
    let errors = {};
    if (!formData.firstName.trim())
      errors.firstName = 'First Name is required'
    if (!formData.lastName.trim())
      errors.lastName = 'Last Name is required'
    if (!formData.email.includes('@'))
      errors.email = 'Enter a valid email'
    if (!formData.comments.trim())
      errors.comments = 'Message cannot be empty'
    setErrors(errors)
    return Object.keys(errors).length === 0;


  }


  function handleSubmit(event) {
    event.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        comments: ""
      })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id='contact' className='contact'>
      <h1 className='heading'> Contact Us</h1>
      <div className='row'>
        <div className='image'>
          <img src='images/contact.png' alt='' />
        </div>

        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='names-container'>
              <div className='first-name'>
                <div className='inputBox'>
                  <input
                    type="text"
                    placeholder='First name'
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                  />
                  {errors.firstName && <span className="error">{errors.firstName}</span>}

                </div>
              </div>

              <div className='last-name'>
                <div className='inputBox'>
                  <input
                    type="text"
                    placeholder='Last name'
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                  />
                  {errors.lastName && <span className="error">{errors.lastName}</span>}

                </div>
              </div>
            </div>


            <div>
              <input
                type="email"
                placeholder='email'
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <textarea
                name="comments"
                value={formData.comments}
                placeholder='Type in your message here'
                onChange={handleChange}
              />
              {errors.comments && <span className="error">{errors.comments}</span>}
            </div>

            <button>Send</button>
            {submitted && <p className="success">Your message has been sent successfully!</p>}
          </form>

        </div>
      </div>
    </section>
  )
}