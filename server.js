const express = require('express')
const app = express()

const Sequelize = require('sequelize')
const sequelize = Sequelize()

const http = require('http')
const path = require('path')

const port = process.env.PORT || 8081

app.use(express.static(__dirname + '/server/src'))


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname))
    res.send("Olá")
})

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Runnimg in port ${port}`)
})
