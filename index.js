import express from "express";
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const apiai = process.env.API_KEY;

// 1. Just learnt how to serve static files using express middleware
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=> {
    res.send('index.html');
})

io.on('connection', (socket) => {
    socket.on('chat-message', (text)=> {
        let apiaiReq = apiai.textRequest(text, {
            sessionId: APIAI_SESSION_ID
        });
    })
});

apiaiReq.on('response', (response) => {
    let aiText = response.result.fulfillment.speech;
    socket.emit('bot reply', aiText); // Send the result back to the browser!
  });

  apiaiReq.on('error', (error) => {
    console.log(error);
  });

  apiaiReq.end();




app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
})