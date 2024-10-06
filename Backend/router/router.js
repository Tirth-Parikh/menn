const express =require('express')
const { getUsers } = require('../controller/indxcontl')
const router = express.Router()

router.get('/signup',getUsers)
// router.route('/login').get()
module.exports = router