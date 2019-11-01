const Department = require("../models/department");
//list
module.exports.list = (req, res) => {
  Department.find({ userId: req.user._id })
    .then(departments => {
      res.json(departments);
    })
    .catch(err => {
      res.json(err);
    });
};

//create
module.exports.create = (req, res) => {
  const body = req.body;
  console.log(body);
  const department = new Department({ ...body, userId: req.user._id });
  department
    .save()
    .then(departments => {
      res.json(departments);
    })
    .catch(err => {
      res.json(err);
    });
};

//show-one departments
module.exports.show = (req, res) => {
  const id = req.params.id;
  Department.findOne({ _id: id, userId: req.user._id })
    .then(department => {
      if (department) {
        res.json(department);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//destroy-one department
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Department.findOneAndDelete({ _id: id, userId: req.user._id })
    .then(department => {
      if (department) {
        res.json(department);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//update-one department
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Department.findOneAndUpdate({ _id: id, userId: req.user._id }, body, {
    new: true
  }).then(department => {
    if (department) {
      res.json(department);
    } else {
      res.json({});
    }
  });
};

//static method is called in class
//instance method is called  in object - array.push, array.pop, It is primarily for find operation
