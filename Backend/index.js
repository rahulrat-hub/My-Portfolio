import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import myroute from './routes/myinfo.js'

dotenv.config();

const app = express()
app.use(cors({
     origin: "https://my-portfolio-omega-roan-99.vercel.app",
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(myroute)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
