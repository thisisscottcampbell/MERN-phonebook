const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const User = require('../model/User');
const Contact = require('../model/Contact')

//@route    Get api/contact
//@desc     Get all user contacts
//@access   Private 

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({user: req.user.id}).sort({date: -1})
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

//@route    POST api/users
//@desc     Add a contact
//@access   Public  

router.post('/', [auth,
    [
      check('name', 'Name is required')
      .not()
      .isEmpty()
    ]
  ],
  async (req, res) => {
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch(err){
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
);

//@route    PUT api/users/:id
//@desc     Update a contact
//@access   Private 

router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

//@route    DELETE api/users/:id
//@desc     Delete a contact
//@access   Private 

router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});



module.exports = router