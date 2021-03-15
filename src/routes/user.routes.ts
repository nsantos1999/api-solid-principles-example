import { UserController } from '@controllers/UserController'
import { Router } from 'express'

const app = Router()

app.get('/', UserController.get)

export default app
