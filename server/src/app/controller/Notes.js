const { conn } = require('../../db')

module.exports = {
    async insertNote(title, description, text) {
        conn.execute(
            `INSERT INTO notes(titleNotes, descriptionNotes, noteNotes) VALUE (${title}, ${description}, ${text})`,
            (err, rows, fields) => {
                return rows
            }
        )
    },

    async selectNotes(id) {
        conn.execute(
            `SELECT * FROM notes WHERE idnotes = ${id}`,
            (err, rows, fields) => {
                if (err) {
                    console.log('Não foi possível encontrar essa nota')
                }
                return rows
            }
        )
    }

}
