import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './app/routes/routes.js'

const app = express()
const PORT = 8080
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))

app.use(cors())
app.use('/', router)
app.listen(PORT, () => {
    console.log('sever is running')
})