import mongoose from "mongoose";

const productCollection ='products'

const productSchema = new mongoose.Schema ({
    id: {
        type:Number,
        required:true,
    },
    tittle: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    code: {
        type:Number,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    status: {
        type:Boolean,
        required:true,
    },
    stock: {
        type:Number,
        required:true,
    },
    thumbnails: {
        type:Array,
    }
})

export const productModel = mongoose.model(productCollection, productSchema)