const Department = require("../models/department");
//list
module.exports.list = (req, res) => {
  Department.find()
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
  console.log(body);
  const department = new Department({ name: body.name });
  department
    .save()
    .then(department => {
      res.json(department);
    })
    .catch(err => {
      console.log(err);
    });
};

//show-one departments
module.exports.show = (req, res) => {
  const id = req.params.id;
  Department.findById(id)
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
  Department.findByIdAndDelete(id)
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
  Department.findByIdAndUpdate(id, body, { new: true }).then(department => {
    if (department) {
      res.json(department);
    } else {
      res.json({});
    }
  });
};

//static method is called in class
//instance method is called  in object - array.push, array.pop, It is primarily for find operation
