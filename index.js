const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


connectToMongo();

const app = express();
app.use(cors());

// to use req.body
app.use(express.json());


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
