import { productModel } from "../models/productModel.js"


//PRODUCTOS CON USO DE MONGOOSE
class ProductoServiceDB {

    async getAllProducts(){
        try{
            const products = await productModel.find()
            return products
        } catch (e){
            console.error(e.message)
            return []
        }
    }

    async createProduct (product){
        const {id,tittle,description,code,price,status,stock,thumbnails} = product

        if(!id|| !tittle|| !description|| !code|| !price|| !status|| !stock){
            return 'ERROR: Campos incompletos'
        }

        const newProduct ={ 
            id,
            tittle,
            description,
            code,
            price,
            status:true,
            stock,
            thumbnails: thumbnails ?? []
        }

        try{
            const result = await productModel.create(newProduct)
            return result
        } catch (e){
            console.error(e.message)
            return 'Error al crear producto'
        }
    }

    async UpdateProduct (uid, product){
        const {id,tittle,description,code,price,status,stock,thumbnails} = product

        if(!id || !tittle || !description || !code || !price || !status || !stock){
            return 'ERROR: Campos incompletos'
        }

        try{
            const result = await EstudianteModel.updateOne({_id:uid},product)
            return result
    
        }catch(e){
            console.error(e.message)
            return 'Error al actualizar producto'
        }
    }

    async DeleteProduct (uid){

        try{
            const result = await EstudianteModel.deleteOne({_id:uid})
            result.render({
                message:result
            })
        }catch(e){
            res.render({
                message:e.message
            })
        }

    }
}

export {ProductoServiceDB}