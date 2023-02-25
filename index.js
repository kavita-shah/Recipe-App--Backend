const mongoose = require("mongoose")
const express = require("express")
var cors = require('cors')

const loginRoute = require("./router/loginRoute");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv =  require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.use("/, loginRoute");
app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json());
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true,useUnfiedTopology: true},() =>{
    console.log("connected to db")
})
app.listen(port,()=> console.log('App listening on port $ {port}'))