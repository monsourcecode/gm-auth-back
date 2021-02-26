const express = require('express')
const {Login, SignUp, AllUsers, Uplaod, Valider} = require("../controllers/user-controller");

const router = express.Router();

router.post('/login', Login)
router.post('/signup', SignUp)
router.post('/signupadmin', SignUp)
router.get('/users', AllUsers)
router.post('/upload', Uplaod)
router.post('/valider', Valider)
module.exports = router

