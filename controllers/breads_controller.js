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
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads