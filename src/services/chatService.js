import chatModel from '../models/messagesModel.js'

class ChatService {

    async getAllMessage (){
        try{
            const messages = await chatModel.find()
            return messages
        }catch(e){
            console.error(e.message)
            return []
        }
    }

    async createMessage (msg){
        const {user, message} = msg

        if (!user ||!message){
            return 'ERROR: mensaje o usuario sin caracteres'
        }

        const NewMessage= {
            user,
            message
        }

        try{
            const result = await chatModel.create(NewMessage)
            return result

        }catch(e){
            console.error(e.message)
            return 'error al crear mensaje'
        }

    }
}

export {ChatService}