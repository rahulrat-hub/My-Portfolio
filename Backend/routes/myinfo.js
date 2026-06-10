import express from 'express'
import {contactPost} from '../controllers/infoController.js'

const myroute = express.Router()

myroute.post("/contact", contactPost)

export default myroute;