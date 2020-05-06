
const {io} = require('../server');

io.on('connection',(Client)=>{

    console.log('Usuario Conectado');

    //enviando un mensaje al usuario apenas se conecta a la pagina
    Client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    Client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    //escuchando al Cliente
    Client.on('enviarMensaje',(data, callback)=>{

        console.log(data);

        Client.broadcast.emit('enviarMensaje',{
            usuario: data.usuario,
            mensaje: data.mensaje
        });

        // if(mensaje.usuario){
        //     callback({
        //         resp: 'TODO SALIO BIEN!!'
        //     });
        // }else{
        //     callback({
        //         resp: 'TODO SALIO MALLLL!!'
        //     }); 
        // }


    });

});