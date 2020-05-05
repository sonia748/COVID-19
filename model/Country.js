const mongoose = require ('mongoose');
const Schema = mongoose.Schema

//create Schema
const CountrySchema = new Schema({
    confirmed:
        {type:String, required:true},
    recovered:
        {type:String, required:true},
    deaths:
        {type:String, required:true},
    date:
        {type:Date, default:Date.now()}

});

model.exports = Country = mongoose.model('Country',CountrySchema);
