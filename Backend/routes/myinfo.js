import express from 'express'
import {contactPost, HomeRoute} from '../controllers/infoController.js'

const myroute = express.Router()

myroute.get("/", HomeRoute)
myroute.post("/contact", contactPost)

export default myroute;