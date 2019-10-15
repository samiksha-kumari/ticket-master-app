const Ticket = require("../models/tickets");

module.exports.list = (req, res) => {
  Ticket.find()
    .populate("departmentId")
    .populate("customerId")
    .then(ticket => {
      res.json(ticket);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const ticket = new Ticket(body);
  ticket
    .save()
    .then(ticket => {
      res.json(ticket);
    })
    .catch(ticket => {
      res.json(ticket);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Ticket.findById(id)
    .populate("departmentId", ["name"])
    .then(ticket => {
      if (ticket) {
        res.json(ticket);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Ticket.findByIdAndDelete(id)
    .then(ticket => {
      if (ticket) {
        res.json(ticket);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Ticket.findByIdAndUpdate(id, body, { new: true })
    .then(ticket => {
      res.json(ticket);
    })
    .catch(err => {
      res.json(err);
    });
};
module.exports.softdestory = (req, res) => {
  const id = req.params.id;
  //const body = req.body;
  Ticket.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
    .then(ticket => {
      res.json(ticket);
    })
    .catch(err => {
      res.json(err);
    });
};
