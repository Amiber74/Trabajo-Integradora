import { Router } from "express"
import { ProductServiceFS } from "../services/productService.js"
import { ProductoServiceDB } from "../services/productoServiceDB.js"
import { uploader } from "../utils/multerUtils.js"

const router = Router()
// const ProductServices= new ProductServiceFS('Products.json')
const ProductServices = new ProductoServiceDB()
router.get('/', async (req, res)=>{

    const products = await ProductServices.getAllProducts()

    res.status(200).send( products )
    
})

router.post('/', uploader.array('thumbnails', 3), async(req, res)=>{
    
    if(req.files){
        req.body.thumbnails = []
        req.files.forEach((file) => {
            req.body.thumbnails.push(file.filename)
            
        })
    }
    const result = await ProductServices.createProduct(req.body)
    res.send({
        message: result
    })
})

router.put('/:uid', async(req, res)=>{

    const {uid} = req.params
    const productReplace = req.body

    const result = await ProductServices.UpdateProduct(uid, productReplace)
    res.send({
        message:result
    })

})

router.delete('/:uid', async(req, res)=>{
    const {uid} = req.params

    try{
        const result = await ProductServices.delete(uid)
        res.render({
            message: result
        })

    } catch (e){
        res.send({
            message: e.message
        })
    }
})



export default router

