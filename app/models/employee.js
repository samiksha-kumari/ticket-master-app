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
    type: String,
    minlength: 10,
    maxlength: 10
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department", //model
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
