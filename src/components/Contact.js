import React from 'react'

export default function Contact() {

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  })

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
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
              <div className='inputBox'>
              <input
                type="text"
                placeholder='First name'
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}          
              />
              <input
                type="text"
                placeholder='Last name'
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
              </div>

              <input
                type="email"
                placeholder='email'
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              <textarea
                name="comments"
                value={formData.comments}
                placeholder='Type in your message here'
                onChange={handleChange}
              />
              <button>Send</button>
            </form>
            
          </div>

      </div>
    </section>
  )
}