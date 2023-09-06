const socket = io()

let user
const contenedor = document.querySelector('#ChatBox')

Swal.fire({
    title:'Identificate',
    input: 'text',
    text:'ingresa el usuario para identificarte',
    inputValidator: (value)=>{
        return !value && 'Necesita escribir un nombre de usuario para continuar.'
    },
    allowOutsideClick:false 
}).then(result=>{
    user= result.value
})

contenedor.addEventListener('keypress',(e)=>{
    if (e.key === "Enter"){
        if(contenedor.value.trim().length  > 0){
            socket.emit('message', {
                user:user,
                msg: contenedor.value
            })
        }
        contenedor.value=''
    }
})

socket.on('MessagesLog',(data) =>{
    let log = document.querySelector('#Chat')
    let message = ''
    data.forEach(e => {
        message  += `${e.user}: ${e.msg} </br>`
    })
    log.innerHTML = message
})
