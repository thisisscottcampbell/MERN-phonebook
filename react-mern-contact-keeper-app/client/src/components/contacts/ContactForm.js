import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import contactContext from '../../context/contact/contactContext';


const ContactForm = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Homie'
  });

  const { name, email, phone, type } = contact

  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value})

  const onSunmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'Homie'
    })
  }

  return (
    <form onSubmit={onSubmit}>
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
          value='Homie'
          checked={type === 'Homie'}
        /> Homie{' '}
        <input 
          type='radio'
          name='type'
          value='personal'
          checked={type === 'professioanl'}
        /> Professional{' '}
        <div>
          <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
        </div>
    </form>
  )
}

export default ContactForm
