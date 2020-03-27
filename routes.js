const NextRouter = require('next-routes')
const routes = module.exports = NextRouter()

// const lang = '/:lang([a-z]{2,2})'

routes.add({
  name: 'index',
  page: 'index',
  pattern: `/:lang([a-z]{2,2})`,
  params: {
    // lang: 'en',
  }
})
