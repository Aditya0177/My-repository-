const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
constdotenv = require("dotenv")
const colors = require("colors");
//config dot env file
Dotenv.config();
// rest object 
constapp = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send("< h1 > hello from server < /h1>")
})

//PORT
const PORT = 8080 || process.env.PORT,

    //listenserver
    app.listen(PORT, () => {
        console.log(`server running on port $ {PORT}`);
    })