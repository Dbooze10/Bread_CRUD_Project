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

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
      })
    } else {
      res.send('404')
    }
  })

// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
    req.body.image = "https://www.allrecipes.com/thmb/fm6dB2rglrJBVsltfcKtXCZFPRQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27023-best-basic-sweet-bread-mfs-4-3f0ff692a57145fa847dc8d2250f4d72.jpg"
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true'
  } else {
    req.body.hasGluten = 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})



module.exports = breads