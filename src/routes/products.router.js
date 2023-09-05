import { Router } from "express"
import { ProductServiceFS } from "../services/productService.js"

const router = Router()
const ProductServices= new ProductServiceFS('Products.json')

router.get('/', (req, res)=>{

    const products = ProductServices.getAllProducts()

    res.status(200).send( products )
    
})



export default router

