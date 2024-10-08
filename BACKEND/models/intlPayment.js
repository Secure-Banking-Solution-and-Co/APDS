const mongoose = require('mongoose');

const transferIntlSchema = new mongoose.Schema({
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

//const Transfer = mongoose.model('intlPayment', transferIntlSchema);
mongoose.models=mongoose.model('intlPayment', transferIntlSchema)
module.exports = Transfer;
