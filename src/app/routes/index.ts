import express from 'express'
import { userRoutes } from '../modules/user/user.routes'
import { reportRoutes } from '../modules/reports/reports.routes'

const router = express.Router()

const modulesroutes = [
  {
    path: '/users',
    route: userRoutes, // Import route here
  },
  {
    path: '/reports',
    route:reportRoutes
  }
]

modulesroutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
