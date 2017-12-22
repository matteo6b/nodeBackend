'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema defines how the user's data will be stored in MongoDB
const MesssageSchema = new mongoose.Schema({


      created_at: Date,
      emitter : { type: Schema.Types.ObjectId, ref: 'User' },
      reciver:{type: Schema.Types.ObjectId, ref: 'User'},
      text:String


})
MesssageSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
module.exports = mongoose.model('Message', MesssageSchema);
