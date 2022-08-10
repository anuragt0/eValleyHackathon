const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/hackathon"
// Database name : hackathon
const mongoURI = "mongodb+srv://eValleyDB:hackathon123@cluster0.irkqaqh.mongodb.net/eValleyDB?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Database");
    }).catch((err)=>{console.log("Some error occured in database connection", err);})
}

module.exports = connectToMongo;
