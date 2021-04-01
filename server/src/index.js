const { conn } = require('./db')
const query = require('./app/controller/Notes')
const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')

/* Conneciton on data base */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    
}
app.use(cors(corsOptions))


/* Rotas */
app.get('/', (req, res) => {
    res.send("Bem vindo a Rest API")
})

app.get('/notes', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    conn.execute(
        'SELECT * FROM notes',
        (err, rows, fields) => {
            res.send(rows)
            if (err)  {
                console.log({
                    mensage: "Não foi possível carregar os dados",
                    erro: err
                })
            }
                
        })
})

app.post('/notes', (req, res) => {
    req.header("Access-Control-Allow-Origin", "*")
    const title = req.body.title
    const description = req.body.description
    const note = req.body.note
    const categ = req.body.categ

    conn.execute(
        `INSERT INTO notes(title, description, note, categ) VALUE (?,?,?,?)`,
        [title, description , note, categ],
        (err, rows, fields) => {
            if (err) {
                console.log({ 
                    mensage: "Não foi possível enviar essa nota", 
                    erro: err
                })
            }
            else {
                console.log("Nota adcionada com sucesso!")
            }    
            res.json(rows)
        }
    )  
})


app.listen(8081, () => {
    console.log("Servidor na porta localhost:8081/")
})