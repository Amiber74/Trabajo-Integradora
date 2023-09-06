import fs from 'fs'


// PROCESO DE PRODUCTOS CON FILESYSTEM
class ProductServiceFS{

    constructor(file){
        this.file = file
    }

    getAllProducts(){
        try{

            const Products = fs.readFileSync(this.file, 'utf-8')
            return JSON.parse(Products)

        }catch(e){
            console.error(e.message)
            return []
        }
    }

    createProduct(product){
        const {id,tittle,description,code,price,status,stock,thumbnails} = product

        if(!id|| !tittle|| !description|| !code|| !price|| !status|| !stock){
            return 'ERROR: Campos incompletos'
        }

        const newProduct = {
            id,
            tittle,
            description,
            code,
            price,
            status,
            stock,
            thumbnails: thumbnails ?? []
        }

        const products = this.getAllProducts()

        products.push(newProduct)

        try{

            fs.writeFileSync( this.file, JSON.stringify(products, null, "\t") )
            return 'Producto creado correctamente'

        }catch (e){
            console.error(e.message)
            return 'ERROR: problemas al crear el producto'
        }

    }

}

export  {ProductServiceFS}