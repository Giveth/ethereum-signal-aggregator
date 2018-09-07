const routes = (module.exports = require('next-routes')())

routes.add('/', 'proposals')
routes.add('/proposals', 'proposals')
routes.add('/proposals/:id', 'proposal')
routes.add('/projects', 'projects')
