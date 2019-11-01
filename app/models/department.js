const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const departmentSchema = new Schema({
  name: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
