'use strict'

const fastify = require('fastify')
const app = fastify({ logger: true })

const movieRoutes = require('./routes/movie-routes')
app.register(movieRoutes, { prefix: '/api' })

const start = async () => {
  try {
    await app.listen({ port: 3000 })
    console.log('Server listening on http://localhost:3000')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
