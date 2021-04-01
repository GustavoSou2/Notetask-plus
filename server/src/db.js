/* const Sequelize = require('sequelize')
const { Model } = require('sequelize')
const sequelize = new Sequelize('notetaskplus', 'root', 'Gu31000My*', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    sequelize,
    Model
}

 */

const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gu31000My*',
    database: 'notetaskplus'
})

conn.connect( (err) => {
    if(err) {
        return console.log({
            Mensage: 'Não foi possível conectar com o banco de dados',
            Erro: `Erro: ${err}`
        })
    }
    else {
        return console.log('Conexão realizada com sucesso!')
    }
} )

module.exports = {
    conn
}
