import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid";
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { 
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

export const ContactState = (props) => {
  const initialState = {
    contacts : [
      {
        id: 1,
        name: 'Buddy',
        email: 'buddy@thecat.com',
        phone: 111-222-3333,
        type: 'homie'
      },
      {
        id: 2,
        name: 'Truman',
        email: 'truman@thecat.com',
        phone: 444-555-5555,
        type: 'homie'
      },
      {
        id: 3,
        name: 'Scooby',
        email: 'cooby@thecat.com',
        phone: 666-777-8888,
        type: 'homie'
      }
    ],
    current: null
  }
  const [state, dispatch] = useReducer(contactReducer, initialState)
  
  //Actions to create:
    //Add Contact
    const addContact = contact => {
      contact.id = uuid();
      dispatch({ type: ADD_CONTACT, payload: contact })
    }

    //Delete Contact
    const deleteContact = id => {
      dispatch({ type: DELETE_CONTACT, payload: id })
    }
    //Set Current Contact
    const setCurrent = contact => {
      dispatch({ type: SET_CURRENT, payload: contact })
    }

    //Clear Current Contact
    const clearCurrent = () => {
      dispatch({ type: CLEAR_CURRENT })
    }

    //Update Current Contact

    //Filter Contacts

    //Clear Filter

    return (
      <ContactContext.Provider
        value={{
          contacts: state.contacts,
          addContact,
          deleteContact,
          setCurrent,
          clearCurrent
        }}
      >
        { props.children }
      </ContactContext.Provider>
    )
}

export default ContactState
