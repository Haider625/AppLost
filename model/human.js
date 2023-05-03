const mongoose = require('mongoose');
mongoose.options.toJSON = { transform : function(doc, ret, options) { 
     delete ret._id;
      delete ret.__v; return ret;
 },
  virtuals: true }
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
