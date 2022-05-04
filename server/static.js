import fastifyPlugin from 'fastify-plugin'
// import fastifyCompress from 'fastify-compress'
import fastifyStatic from 'fastify-static'
import fastifyCaching from 'fastify-caching'
import { resolve } from 'path'

export default fastifyPlugin(function routes(app, opts, done) {
  app
    .register(fastifyCaching)
    // .register(fastifyCompress)
    .register(fastifyStatic, {
      root: resolve('client'),
      prefix: '/'
    })

  done()
})
