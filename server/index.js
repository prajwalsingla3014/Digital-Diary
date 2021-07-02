/** @format */

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import Connection from './database/db.js'
import Router from './routes/route.js'

dotenv.config()
const app = express()

const PORT = 8000

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username, password)

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
