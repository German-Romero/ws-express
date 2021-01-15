const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

// se define esta info para sacarlo de heroku, ya que no se sabe qie puerto puede ocupar
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'))

// Express y HBS
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'germán r'
    })
})

app.get('/about', function(req, res) {
    res.render('about', {
        imagen: '../assets/img/1lugar.jpg'
    })
})

app.get('/data', function(req, res) {
    res.send('Aqui podemos mandariamos algunos datos')
})

app.listen(port, () => {
    console.log(`Puerto ${port} OK`)
})

/*
app.get('/inicio', function(req, res) {

    let salida = {
        nombre: "German",
        edad: 40,
        url: req.url
    }
    res.send(salida)
})
*/