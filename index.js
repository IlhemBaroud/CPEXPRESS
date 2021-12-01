var express = require("express")
var app = express()
var router = express.Router()



app.get('/', (request, response) => {
    response.sendFile(__dirname+"/pages/home.html")
});
app.get('/contact', (request, response) => {
    response.sendFile(__dirname+"/pages/contact.html")
});
app.get('/services', (request, response) => {
    response.sendFile(__dirname+"/pages/services.html")
});



app.listen(3000, ()=>{
    console.log('Running on port 3000');
})


