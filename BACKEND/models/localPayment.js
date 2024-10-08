const mongoose = require('mongoose');

const transferLocalSchema = new mongoose.Schema({
  recipientName: {
    type: String,
    required: true,
    trim: true
  },
  recipientBank: {
    type: String,
    required: true
  },
  recipientAccNo: {
    type: String,
    required: true,
    unique: true
  },
  transferAmount: {
    type: String,  // e.g., 'R200', '$20'
    required: true
  },
  swiftCode: {
    type: String,
    required: true
  }
});

// const Transfer = mongoose.model('localPayment', transferLocalSchema);
mongoose.models=mongoose.model('localPayment', transferLocalSchema)
module.exports = Transfer;
