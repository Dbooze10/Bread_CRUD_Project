// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Routes
app.get('/', (req, res) => {
    res.send("<h1>An Awesome App About Breads!</h1>")
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.get('*', (req, res) => {
    res.send('<h1>404 NOT FOUND</h1>')
})

// LISTEN
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
})