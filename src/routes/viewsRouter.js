import { Router } from "express"
import { ProductServiceFS } from "../services/productService.js"

const router = Router()
const ProductServices= new ProductServiceFS('Products.json')


router.get('/', (req, res)=>{

    res.render(
        'index',
        {
            title:'CoderHouse',
            style:'index.css',
            products: ProductServices.getAllProducts()
        }
    )
})


export default router