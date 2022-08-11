const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const { default: mongoose } = require('mongoose');

// const connectToMongo = require('./db');
app.use(cors());

// connectToMongo();
const DB = "mongodb+srv://eValleyDB:hackathon123@cluster0.irkqaqh.mongodb.net/eValleyDB?retryWrites=true&w=majority";
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("connection succesfully");
}).catch((err)=>{console.log("No connection", err)})
// to use req.body
app.use(express.json());

// https://evalleyhackathon.herokuapp.com/

app.use('/api/auth', require('./routes/auth.js'));

app.use('/api', require('./routes/area-page.js'));

const PORT = process.env.PORT || 5000;

// step 3 : heroku
if(process.env.NODE_ENV == "production" || process.env.NODE_ENV == "staging"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, ()=>{
    console.log('Listening at port ',PORT);
})
