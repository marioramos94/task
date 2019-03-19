


const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to the abc store"});
});

require('./app/routes/store.routes.js')(app);



// listen for requests
app.listen(9000, () => {
    console.log("Server is listening on port 9000");
});