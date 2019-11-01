const Employee = require("../models/employee");

//list
module.exports.list = (req, res) => {
  Employee.find({ userId: req.user._id })
    .populate("departmentId", ["name"])
    .then(employees =>
      // console.log(employees);
      res.json(employees)
    )
    .catch(err => {
      console.log(err);
    });
};

//create
module.exports.create = (req, res) => {
  const body = req.body;
  console.log(body);
  const employee = new Employee({ ...body, userId: req.user._id });
  // name: body.name,
  // email: body.email,
  // mobile: body.mobile,
  // departmentId: body.departmentId

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
  Employee.findOne({ _id: id, userId: req.user._id }).then(employee => {
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
  Employee.findOneAndDelete({ _id: id, userId: req.user._id })
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
  Employee.findOneAndUpdate({ _id: id, userId: req.user._id }, body, {
    new: true
  }).then(employee => {
    if (employee) {
      res.json(employee);
    } else {
      res.json({});
    }
  });
};
