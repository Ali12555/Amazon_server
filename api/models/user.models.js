const { Schema, model } = require("mongoose");
 
 const USER_SCHEMA = new Schema({
   Name: {
     type: String,
     required: true,
   },
   Email: String,
   Password: String,

 });
 
 const USER_MODEL = model("user", USER_SCHEMA);
 
 module.exports = USER_MODEL;