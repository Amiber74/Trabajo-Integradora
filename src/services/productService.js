import fs from 'fs'

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

}

export  {ProductServiceFS}