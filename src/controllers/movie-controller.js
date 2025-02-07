'use strict'

const MovieService = require('../services/movie-service')

const MovieController = {
  getAll: (request, reply) => {
    const { title } = request.query
    const movies = MovieService.findAll(title)
    if (movies.length) {
      reply.code(200).send(movies)
    } else {
      reply.code(404).send({ error: 'Movies not found' })
    }
  },

  getById: (request, reply) => {
    const { id } = request.params
    const movie = MovieService.findById(id)
    if (movie) {
      reply.code(200).send(movie)
    } else {
      reply.code(404).send({ error: 'Movie not found' })
    }
  },

  post: (request, reply) => {
    const movieData = request.body
    const newMovie = MovieService.save(movieData)
    reply.code(201).send(newMovie)
  },

  put: (request, reply) => {
    const { id } = request.params
    const movieData = request.body
    const changes = MovieService.change(id, movieData)
    if (changes) {
      reply.send({ message: 'Movie updated successfully' })
    } else {
      reply.code(404).send({ error: 'Movie not found' })
    }
  },

  delete: (request, reply) => {
    const { id } = request.params
    const changes = MovieService.remove(id)
    if (changes) {
      reply.send({ message: 'Movie deleted successfully' })
    } else {
      reply.code(404).send({ error: 'Movie not found' })
    }
  }
}

module.exports = MovieController
