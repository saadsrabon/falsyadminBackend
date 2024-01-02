import express from 'express'
import { userRoutes } from '../modules/user/user.routes'

const router = express.Router()

const modulesroutes = [
  {
    path: '/users',
    route: userRoutes, // Import route here
  },
]

modulesroutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
