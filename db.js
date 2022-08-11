const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE;
// const mongoURI = "mongodb+srv://eValleyDB:hackathon123@cluster0.irkqaqh.mongodb.net/eValleyDB?retryWrites=true&w=majority";

console.log("hererer: ", mongoURI);
const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Database");
    }).catch((err)=>{console.log("Some error occured in database connection", err);})
}

module.exports = connectToMongo;
