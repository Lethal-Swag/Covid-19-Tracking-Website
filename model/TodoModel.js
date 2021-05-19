const mongoose  =require('mongoose');
const Schema = mongoose.Schema;

TodoSchema = new Schema({
   name:String,
   email:String,
   review:String
});

module.exports = mongoose.model("Record", TodoSchema);




