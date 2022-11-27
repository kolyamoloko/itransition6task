const PORT = process.env.PORT || 5000;
const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('publick/index.html');
})
const server = app.listen(PORT, () => console.log('server started'));

const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('Client connected')
    socket.on('send_message', function(name,value){
        io.emit('send_all_message', name, value);
    } )
});