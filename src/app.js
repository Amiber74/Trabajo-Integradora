import express from 'express'
import ProductsRouter from './routes/products.router.js'


const app = express()

//MiDDLEWARES

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/api/product', ProductsRouter)


//Mensaje de servidor levantado
const port = 8080
app.listen(port,()=>{
    console.log("Servidor levantado en el puerto "+ port)
})

