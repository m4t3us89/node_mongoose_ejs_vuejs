const UserRoutes = require('./user/routes')
const TaskRoutes = require('./task/routes')
const AuthRoutes = require('./auth/routes')
const ErroRoutes = require('./error/routes')
const routes = []

routes.push(
    UserRoutes,
    TaskRoutes,
    AuthRoutes,
    ErroRoutes
)

module.exports = routes