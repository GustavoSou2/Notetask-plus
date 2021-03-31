const { conn } = require('./db')
const query = require('./app/controller/Notes')
const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')

/* Conneciton on data base */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


/* Rotas */
app.get('/notes', (req, res) => {
    conn.execute(
        'SELECT * FROM notes',
        (err, rows, fields) => {
            res.send(rows)
        })
})



app.get('/add-notes', (req, res) => {

    var title = "Testando"
    var description = "Testando o mysql2"
    var text = "Enxendo o saco"

    conn.execute(
        `INSERT INTO notes(titleNotes, descriptionNotes, noteNotes) VALUE (?,?,?)`,
        [title , description , text],
        (err, rows, fields) => {
            if (err) {
                console.log({ 
                    mensage: "Não foi possível enviar essa nota", 
                    erro: err
                })
            }    
            res.json(rows)
        }
    )


})




app.listen(8081, () => {
    console.log("Servidor na porta localhost:8081/")
})