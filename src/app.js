import express from 'express'
import handlebars from 'express-handlebars'
import ProductsRouter from './routes/products.router.js'
import viewsRouter from './routes/viewsRouter.js'
import chatRouter from './routes/chatRouter.js'
import __dirname from './utils/dirnameUtils.js'
import mongoose from 'mongoose'
import {Server} from 'socket.io'

const uri ='mongodb+srv://rojasfacundo2002:coderhouse2023@cluster0.esne0dt.mongodb.net/eccomerce?retryWrites=true&w=majority'
mongoose.connect(uri)
const app = express()

//HANDLEBARS
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + './../views')
app.set('view engine','handlebars')

//MiDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


//Routers
app.use('/api/product', ProductsRouter)
app.use('/products', viewsRouter)
app.use('/chat', chatRouter)


//Mensaje de servidor levantado

    //Implementacion de socket
const port = 8080
const httpServer = app.listen(port,()=>{console.log("Servidor levantado en el puerto "+ port)})

export const io = new Server(httpServer)

const Chat = []

io.on('connect',socket => {
    console.log('nuevo cliente conectado: ', socket.id)

    socket.on('message', data =>{
        Chat.unshift(data)
        io.emit('MessagesLog', Chat)
    })
})