import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// 1. Just learnt how to serve static files using express middleware
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=> {
    res.send('index.html');
})

app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
})