const mongoose = require('mongoose');

const human = mongoose.Schema({
    name : String  ,
    country : String ,
    gender : String,
    waiting_place: String ,
    YersLost : Date ,
    PhoneNumber : Number,
    note : String,
})

module.exports= mongoose.model('HUMAN',human)
