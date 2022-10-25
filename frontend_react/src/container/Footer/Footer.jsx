import React, { useState } from 'react'

import { images } from '../../constants'
import { Wrapper, MotionWrap } from '../../hocs'
import './Footer.css'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Send form data to database and email
    // const contact = {
    //   _type: 'contact',
    //   name: name,
    //   email: email,
    //   message: message,
    // }

    setLoading(false)
  }

  return (
    <>
      <h2 className='head-text'>Let's work together! I am available for fulltime, contracted, or freelance projects. <span>Hire me</span> to get your project done!</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a className='p-text' href="mailto:cayla.bradley94@gmail.com">cayla.bradley94@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a className='p-text' href="tel: +1 (331) 422-9788">+1 (331) 422-9788</a>
        </div>
      </div>

      {!formSubmitted ?
      <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
        <div className='app__flex'>
          <label className="p-text" htmlFor="name">Name</label>
          <input className="p-text" type="text" id="name" name="name" value={name} onChange={handleChangeInput} />
          <label className="p-text" htmlFor="email">Email</label>
          <input className="p-text" type="email" id="email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <label className="p-text" htmlFor="message">Message</label>
          <textarea className="p-text" name="message" value={message} id="message" onChange={handleChangeInput}/>
        </div>
        <button className="p-text" type="submit">{loading ? 'Sending' : 'Send Message'}</button>
      </form>:

      <h3 className='head-text'>Thank you for getting in touch!</h3>
      }

    </>
  )
}

export default Wrapper(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
  )