import React, { useState } from 'react'

const ContactForm = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'homie'
  });

  const { name, email, phone, type } = contact

  return (
    <div>
      <h2  className='text-primary'>Add Contact</h2>
      <input 
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      />
    </div>
  )
}

export default ContactForm
