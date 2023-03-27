const express = require ('express');
const body_parser = require('body-parser');
const lost_rout = require('./router/lost');
const human_rout = require('./router/human');
const mongoose = require ('mongoose')
const app = express();

const PORT =process.env.PORT ||4000;

mongoose.connect('mongodb://applost:applost@ac-evuen8u-shard-00-00.ojom7c7.mongodb.net:27017,ac-evuen8u-shard-00-01.ojom7c7.mongodb.net:27017,ac-evuen8u-shard-00-02.ojom7c7.mongodb.net:27017/?ssl=true&replicaSet=atlas-n31g12-shard-0&authSource=admin&retryWrites=true&w=majority',
{
    useNewUrlParser:true ,
    useUnifiedTopology : true,
    
});
const connection = mongoose.connection;
connection.on('error' , (res,req) => {
    console.log("connected  Erorr")
});
connection.on('connected' , () => {
    console.log("connected with cloud")
});

app.use([body_parser.urlencoded({extended :true}),express.json()])
app.use('/lost',lost_rout);
app.use('/human',human_rout)
app.listen(PORT,()=>{
    console.log("It is work");
} )
module.exports= app;