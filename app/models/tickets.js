const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ticketSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department"
  },
  employeesId: [
    {
      type: Schema.Types.ObjectId, // type: 
      ref: "Employee"
    }
  ],
  title: {
    type: String
  },
  message: {
    type: String
  },
  isResolved: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  code: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const Ticket = mongoose.model("tickets", ticketSchema);
module.exports = Ticket;
