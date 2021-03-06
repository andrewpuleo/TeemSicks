const express = require('express');
const { User } = require('../models');
const router = express.Router();
const Auth = require('./authenticator');

router.route('/')

   // create user
  .post((req, res) => {
    const {
      userType,
      firstName,
      lastName,
      phone,
      email,
      username,
      password,
    } = req.body;
    // validate potentially here
    User.create({
      userType,
      firstName,
      lastName,
      phone,
      email,
      username,
      password,
    }).then((user) => {
      res.json(user);
    });
  })
//get all
  .get((req, res) => {
    User.findAll().then((users) => {
      res.json({
        users,
      });
    });
  });


router.route('/:id')

  .put((req, res) => {
    const{firstName, lastName, phone, email, password, username } = req.body;
    User.findById(req.params.id).then((user)=> {
      const userToUpdate = user;
      userToUpdate.firstName = firstName;
      userToUpdate.lastName = lastName;
      userToUpdate.username = username;
      userToUpdate.phone = phone;
      userToUpdate.email = email;
      userToUpdate.password = password;
      userToUpdate.save().then((updatedUser)=>{
        res.json(updatedUser);
      });
    });
  });


/* GET specific user listing. */
router.get('/:id', function(req, res) {
  User.findById(req.params.id).then((user) => {
    res.json({user});
  });
});

router.post('/login', function(req, res) {

  const { username, password } = req.body;
  if(!username) {

    return res.status(422).json({
      data: {
        invalid: true
      },
      errors: {
        username: 'is required',

      },
    });
  }
  if(!password) {
    return res.status(422).json({
      data: {
        invalid: true
      },
      errors: {
        password: 'is required',
      },
    });
  }
  Auth.login(username, password).then(
    session => {
      res.json(session.userId);
    }, error => {
      res.status(403).json({ error: error.message });
    }
  );
});

router.delete('/:id', function(req, res) {
  const idToDelete = req.params.id;
  // TODO: make sure person calling is admin
  User.findById(idToDelete).then((user) => {
    user.destroy().then(() => {
      res.json({ delete: true });
    });
  }).catch(() => {
    res.json({ delete: false });
  });
});

module.exports = router;
