const mongoose = require('mongoose');

const lost = mongoose.Schema({
    name : String,
    country : String ,
    typeLost : String ,
    lssuer : String ,
    YersLost : Date ,
    PhoneNumber : Number,
    note : String,

})
module.exports= mongoose.model('LOST',lost)