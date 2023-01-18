const express = require("express")
const router = express.Router();

const usersControllers = require('../controllers/users.js')
router.post('/login', usersControllers.loginUser);
router.post('/register', usersControllers.registerUser);

module.exports= router;