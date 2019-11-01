const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ticketSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true
  },
  employeesId: [
    {
      type: Schema.Types.ObjectId, // type:
      ref: "Employee",
      required: true
    }
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isResolved: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  code: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
