import { Router } from 'express'

import userRoutes from '@routes/user.routes'

const app = Router()

app.use('/user', userRoutes)

export default app
