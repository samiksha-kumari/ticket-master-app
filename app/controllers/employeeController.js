const Employee = require("../models/employee");

//list
module.exports.list = (req, res) => {
  Employee.find()
    .then(employees => {
      res.json(employees);
    })
    .catch(err => {
      console.log(err);
    });
};

//create
module.exports.create = (req, res) => {
  const body = req.body;
  console.log(body);
  const employee = new Employee({
    name: body.name,
    email: body.email,
    mobile: body.mobile
  });
  employee
    .save()
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      console.log(err);
    });
};

//show-one employees
module.exports.show = (req, res) => {
  const id = req.params.id;
  Employee.findById(id).then(employee => {
    if (employee) {
      res.json(employee);
    } else {
      res.json({});
    }
  });
};

//destroy-one employee
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Employee.findByIdAndDelete(id)
    .then(employee => {
      if (employee) {
        res.json(employee);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//update-one employee
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Employee.findByIdAndUpdate(id, body, { new: true }).then(employee => {
    if (employee) {
      res.json(employee);
    } else {
      res.json({});
    }
  });
};
