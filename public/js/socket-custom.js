var socket = io();

socket.on('connect',function(){

    console.log('Conectado con el Servidor');

});

//escuchar eventos,sucesos
socket.on('disconnect',function(){

    console.log('Perdimos la conexion con el servidor');

});

//Enviar informacion
socket.emit('enviarMensaje', {

    usuario: 'George',
    mensaje: 'Hola mundo'

}, function(resp){

    console.log('Respuesta server: ',resp);
});

//Escuchando Informacion del Servidor
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});