'use strict'

const { DatabaseSync } = require('node:sqlite')
const db = new DatabaseSync(':memory:')

function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS Filmes (
      CodigoFilme INTEGER PRIMARY KEY AUTOINCREMENT,
      Titulo TEXT NOT NULL,
      Diretor TEXT NOT NULL,
      DataLancamento TEXT,
      Genero TEXT DEFAULT 'Indefinido',
      Nota REAL
    )`)
}

initDatabase()

module.exports = db
