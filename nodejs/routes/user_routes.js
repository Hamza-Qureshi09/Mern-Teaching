
const express = require('express')
const router = express.Router()
const { UserRegistration } = require('../controllers/user_controller')

// Routes for user Auth
router
    .post('/register', UserRegistration)
    .post('/login')
    .get('/verifyMe')
    .get('/logout')
    
module.exports = router