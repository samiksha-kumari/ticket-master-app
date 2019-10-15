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
    type: String
  }
});

//Note constructor function
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
