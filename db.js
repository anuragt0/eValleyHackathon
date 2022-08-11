const mongoose = require('mongoose');
const env = require('dotenv');
// const mongoURI = process.env.DATABASE;
const mongoURI = "mongodb+srv://eValleyDB:hackathon123@cluster0.irkqaqh.mongodb.net/eValleyDB?retryWrites=true&w=majority";

console.log("hererer: ", process.env.DATABASE);
const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Database");
    }).catch((err)=>{console.log("Some error occured in database connection", err);})
}

module.exports = connectToMongo;
