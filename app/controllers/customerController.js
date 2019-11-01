const Customer = require("../models/customer");

//list   new property of export object that i created whose value can now be a function
module.exports.list = (req, res) => {
  //anonymous function
  Customer.find({ userId: req.user._id })
    .then(customers => {
      res.json(customers);
    })
    .catch(err => {
      res.json(err);
    });
};
//create

module.exports.create = (req, res) => {
  const body = req.body;
  const customer = new Customer({ ...body, userId: req.user._id });
  customer
    .save()
    .then(customer => {
      res.json(customer);
    })
    .catch(err => {
      console.log(err);
    });
};

//show-one customer
module.exports.show = (req, res) => {
  const id = req.params.id;
  Customer.findOne({ _id: id, userId: req.user._id })
    .then(customer => {
      if (customer) {
        res.json(customer);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//destroy-one customers
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Customer.findOneAndDelete({ _id: id, userId: req.user._id })
    .then(customer => {
      if (customer) {
        res.json(customer);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};
//update-one customers
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Customer.findOneAndUpdate({ _id: id, userId: req.user._id }, body, {
    new: true
  }).then(customer => {
    if (customer) {
      res.json(customer);
    } else {
      res.json({});
    }
  });
};
