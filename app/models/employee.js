//every model has its own file
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department" //model
  }
});

const Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;
