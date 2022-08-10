const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Database");
    }).catch((err)=>{console.log("Some error occured in database connection", err);})
}

module.exports = connectToMongo;
