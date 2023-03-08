const mongoose = require('mongoose');

const human = mongoose.Schema({
    name : String  ,
    country : String ,
    lssuer : String ,
    YersLost : Date ,
    PhoneNumber : Number,
    note : String,
})

module.exports= mongoose.model('HUMAN',human)
