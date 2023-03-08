const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    console.log(Bread)
    //res.send('This is the index at /breads')
    res.render('index', {
        breads: Bread,
        title: "Breads Index Page"
    })
})

breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread:Bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }
})

module.exports = breads