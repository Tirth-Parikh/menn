const express =require('express')
const { getUsers } = require('../controller/indxcontl')
const router = express.Router()

router.get('/signup',getUsers)
module.exports = router