const mongoose = require('mongoose');
mongoose.options.toJSON = { transform : function(doc, ret, options) { 
    ret.id = ret._id.id;
     delete ret._id;
      delete ret.__v; return ret;
 },
  virtuals: true }
const lost = mongoose.Schema({
    name : String,
    typeLost : String ,
    country : String ,
    lssuer : String ,
    YersLost : Date ,
    PhoneNumber : Number,
    note : String,

})
module.exports= mongoose.model('LOST',lost)