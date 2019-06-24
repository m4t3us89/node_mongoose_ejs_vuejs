const UserRoutes = require('./user/routes')
const TaskRoutes = require('./task/routes')
const routes = []

routes.push(
    UserRoutes,
    TaskRoutes
)

module.exports = routes