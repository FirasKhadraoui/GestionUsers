const express = require('express');
const { addUser, findAllUsers, findUser, updateUser, deleteUser } = require('../controller/users.controller');
const router = express.Router()

// add user
router.post('/adduser',addUser)

// get users
router.get('/users',findAllUsers)

// get user by id
router.get('/user/:id',findUser)

// modify user
router.put('/modifyuser/:id',updateUser)

// delete user
router.delete('/deleteuser/:id',deleteUser)


module.exports = router;