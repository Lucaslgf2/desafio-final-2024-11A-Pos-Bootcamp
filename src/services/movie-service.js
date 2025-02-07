'use strict'

const MovieModel = require('../models/movie-model')

const MovieService = {
  findAll: (title) => {
    if (title) {
      return MovieModel.selectByTitle(title)
    } else {
      return MovieModel.selectAll()
    }
  },

  findById: (id) => {
    return MovieModel.selectById(id)
  },

  save: (movieData) => {
    return MovieModel.insert(movieData)
  },

  change: (id, movieData) => {
    return MovieModel.update(id, movieData)
  },

  remove: (id) => {
    return MovieModel.delete(id)
  }
}

module.exports = MovieService
