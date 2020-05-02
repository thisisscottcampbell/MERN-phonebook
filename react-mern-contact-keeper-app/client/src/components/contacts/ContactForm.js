import React from 'react'

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
      
    </div>
  )
}

export default ContactForm
