const express = require('express')
const router = express.Router()

// @desc   Login /
// @route GET /
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})


// @desc   Dashboard
// @route  GET /dashboard
router.get('/dashboard', (req, res) => {
    res.send('dashboard')
})

module.exports = router