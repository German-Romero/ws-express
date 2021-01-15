const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        let salida = {
            nombre: "German",
            edad: 40,
            url: req.url
        }

        res.write(JSON.stringify(salida))
            //res.write('Hola a Todos!')
        res.end()
    })
    .listen(8080)

console.log("Escuchando el pueto 8080")