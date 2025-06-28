const { Schema, model } = require("mongoose");
 
 const USER_SCHEMA = new Schema({
   Name: {
     type: String,
     required: true,
     trim: true
   },
   Email: {
     type: String,
     required: true,
     trim: true,
     unique: true
   },
   Password: {
     type: String,
     required: true,
     trim: true,
    
   },

 });
 
 const USER_MODEL = model("user", USER_SCHEMA);
 
 module.exports = USER_MODEL;