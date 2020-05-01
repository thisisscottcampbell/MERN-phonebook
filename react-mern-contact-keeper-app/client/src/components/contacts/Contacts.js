import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact;/ContactContext'

export const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts } = ContactContext
  return (
    <Fragment>
      {contacts.map(contact => (
        <h3>{contact.name}</h3>
      ))}
    </Fragment>
  )
}
