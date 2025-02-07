'use strict'

const MovieController = require('../controllers/movie-controller')

async function movieRoutes(fastify, options) {
  fastify.get('/movies', MovieController.getAll)
  fastify.get('/movies/:id', MovieController.getById)
  fastify.post('/movies', MovieController.post)
  fastify.put('/movies/:id', MovieController.put)
  fastify.delete('/movies/:id', MovieController.delete)
}

module.exports = movieRoutes
