const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const departmentSchema = new Schema({
  name: {
    type: String
  }
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
