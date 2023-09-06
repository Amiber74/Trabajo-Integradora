import mongoose from "mongoose";

const Messagecollection = 'message'

const MessageSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
})

export default mongoose.model(Messagecollection, MessageSchema)