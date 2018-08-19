const routes = (module.exports = require('next-routes')())

routes.add('/', 'index')
routes.add('/proposals', 'index')
routes.add('/projects', 'projects')
