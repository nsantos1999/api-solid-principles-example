import express from 'express'
import routes from '@routes/index'

const app = express()

app.use(routes)

app.get('/', (_, res) => {
  return res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server started!!')
})
