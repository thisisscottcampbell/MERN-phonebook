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
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
         <input 
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
         <input 
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
        <input 
          type='radio'
          name='type'
          value='personal'
          checked={type === 'personal'}
        /> Personal{' '}
        <input 
          type='radio'
          name='type'
          value='personal'
          checked={type === 'professioanl'}
        /> Professional{' '}
    </div>
  )
}

export default ContactForm
