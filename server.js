const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })


const routes = require('./routes')
const handle = routes.getRequestHandler(app)

// const handle = app.getRequestHandler();


app.prepare()
  .then(async () => {

    const server = express()

    // use i18next...
    await nextI18next.initPromise
    server.use(nextI18NextMiddleware(nextI18next))
    server.use(express.json());

    server.get('*', (req, res) => {
      return handle(req, res)
    })


    await server.listen(port, (err) => {
      if (err) throw err

      const host = `http://localhost:${port}`

      console.log(`> Ready on ${host}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
