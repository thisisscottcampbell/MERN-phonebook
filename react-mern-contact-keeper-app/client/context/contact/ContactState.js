import React, { useReducer } from 'react';
import uuid from 'uuid'
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
        phone: 111-111-1111,
        type: 'homie'
      },
      {
        id: 2,
        name: 'Truman',
        email: 'truman@thecat.com',
        phone: 222-222-2222,
        type: 'homie'
      },
      {
        id: 3,
        name: 'Scooby',
        email: 'cooby@thecat.com',
        phone: 333-333-3333,
        type: 'homie'
      }
    ]
  }
}
