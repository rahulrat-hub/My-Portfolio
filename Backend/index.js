import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import myroute from './routes/myinfo.js'

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(myroute)

app.listen(4000, ()=>console.log("running"))
