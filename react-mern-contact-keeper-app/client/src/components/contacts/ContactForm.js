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
         <input 
        type='text'
        placeholder='email'
        name='email'
        value={email}
        onChange={onChange}
      />
         <input 
        type='text'
        placeholder='phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
         <input 
        type='text'
        placeholder='type'
        name='type'
        value={type}
        onChange={onChange}
      />
    </div>
  )
}

export default ContactForm
