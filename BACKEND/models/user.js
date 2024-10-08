// // MongoDB connection using the environment variable

const mongoose = require('mongoose');

// User model. At this point, the user is the customer 
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        // Allow letters and spaces only
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: props => `${props.value} is not a valid full name!`
    }
  },
  passportId: {
    type: String,  // Changed to String in case of leading zeros in the ID, for example, 001226.......
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        // Passport ID has to be numeric, 9-12 digits
        return /^\d{9,12}$/.test(v);
      },
      message: props => `${props.value} is not a valid passport ID!`
    }
  },
  accNo: {
    type: String,  // Changed to String for consistency with other account numbers
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        // Account number is numeric, 10-12 digits
        return /^\d{10,12}$/.test(v);
      },
      message: props => `${props.value} is not a valid account number!`
    }
  },
  password: {
    type: String,
    required: true,
    // @Cameron insert hashing passwords before saving here, I think this should be the most appropriate place for it
  },
  balance: {
    type: Number,
    default: 5000  // as a user registers, the default balace is R5000. 
    //the default money can be deducted or added
  }
});

// @ST10036066 review!
const User = mongoose.model('User', userSchema);
module.exports = User;