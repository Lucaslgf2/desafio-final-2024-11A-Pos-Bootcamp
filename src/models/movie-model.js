'use strict'

const db = require('../config/database')

class MovieModel {
  static selectAll() {
    const result = db.prepare('SELECT * FROM Filmes').all()
    return result?.map(item => {
      return {
        id: item.CodigoFilme,
        title: item.Titulo,
        director: item.Diretor,
        releaseDate: item.DataLancamento,
        genre: item.Genero,
        rating: item.Nota
      }
    })
  }

  static selectById(id) {
    const result = db.prepare('SELECT * FROM Filmes WHERE CodigoFilme = ?').get(id)
    return result ? {
      id: result.CodigoFilme,
      title: result.Titulo,
      director: result.Diretor,
      releaseDate: result.DataLancamento,
      genre: result.Genero,
      rating: result.Nota
    } : undefined
  }

  static selectByTitle(title) {
    const result = db.prepare('SELECT * FROM Filmes WHERE Titulo = ?').all(title)
    return result?.map(item => {
      return {
        id: item.CodigoFilme,
        title: item.Titulo,
        director: item.Diretor,
        releaseDate: item.DataLancamento,
        genre: item.Genero,
        rating: item.Nota
      }
    })
  }

  static insert(movie) {
    const { title, director, releaseDate, genre, rating } = movie
    const stmt = db.prepare('INSERT INTO Filmes (Titulo, Diretor, DataLancamento, Genero, Nota) VALUES (?, ?, ?, ?, ?)')
    const result = stmt.run(title, director, releaseDate, genre, rating)
    return { id: result.lastInsertRowid, ...movie }
  }

  static update(id, movie) {
    const { title, director, releaseDate, genre, rating } = movie
    const stmt = db.prepare(`UPDATE Filmes SET Titulo = ?, Diretor = ?, DataLancamento = ?, Genero = ?, Nota = ? WHERE CodigoFilme = ?`);
    const result = stmt.run(title, director, releaseDate, genre, rating, id);
    return result.changes;
  }

  static delete(id) {
    return db.prepare('DELETE FROM Filmes WHERE CodigoFilme = ?').run(id)
  }
}

module.exports = MovieModel
