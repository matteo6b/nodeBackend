'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = Schema({
  name:{
    type:String,
  },
  surname:String,
  email:{
    type:String,
    lowercase: true,
    unique: true,
    required: true
  },
  password:String,
  role: String,
  image:String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
})

UserSchema.methods.favorite = function(id){
  if(this.favorites.indexOf(id) === -1){
    this.favorites.push(id);
  }

  return this.save();
};

UserSchema.methods.unfavorite = function(id){
  this.favorites.remove(id);
  return this.save();
};

module.exports = mongoose.model('User',UserSchema);
