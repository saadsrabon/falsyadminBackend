import express from 'express'

const router = express.Router()

const modulesroutes = [
  {
    path: 'path here',
    route: 'route here', // Import route here
  },
]

modulesroutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
