const mongoose = require("mongoose");

//schema for out note - constructor function
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String,
    minlength: 10,
    maxlength: 10
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

//Note constructor function
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
