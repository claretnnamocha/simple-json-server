const http = require("http")
const express = require('express')
const fs = require("fs")

const app = express()
var port = process.env.PORT || 8081

app.get('/', function(request, response) {
    fs.readFile(`${__dirname}/data.json`, 'utf8', function(err, data) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(data)
    })
})

app.get('/:id', function(request, response) {
    fs.readFile(`${__dirname}/data.json`, 'utf8', function(err, data) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        data = JSON.parse(data)
        data.forEach((item) => {
            if (item.id == request.params.id) {
            	data = JSON.stringify(item)
                response.end(data)
            }
        })
        response.end('{"status":false,"message":"No data found!!"}')
    })
})

app.listen(port, function() {
    console.log(`Server running at http://127.0.0.1:${this.address().port}/`)
})