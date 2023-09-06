import { Router } from "express"
import { ChatService } from "../services/chatService.js"

const router = Router()
const chatService = new ChatService()

router.get('/', async (req, res)=>{
    const messages = await chatService.getAllMessage()
    res.status(200).send(messages)
})

router.post('/', async (req, res)=>{
    
    const result = await chatService.createMessage(req.body)

    res.send({
        message:result
    })

})


export default router