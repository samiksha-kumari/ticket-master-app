const { User } = require("../models/users");

//localhost:3010/users/register
module.exports.register = (req, res) => {
  const body = req.body;
  console.log(body);
  const user = new User(body);
  user
    .save()
    .then(user => {
      console.log(user);
      const { _id, username, email } = user;
      res.send({ _id, email, username }); //(user);
      //console.log(user.isNew);
    })
    .catch(err => {
      res.send(err);
    });
};

//localhost:3010/ users/ login;
module.exports.login = (req, res) => {
  const body = req.body;
  console.log(body);
  User.findByCredentials(body.email, body.password)
    .then(user => {
      return user.generateToken();
    })
    .then(user => {
      console.log(user);
      res.send(user);
      //res.setHeader("x-auth", token).send({});
    })
    .catch(err => {
      res.send(err);
    });
};

//localhost:3010/users/accounts
module.exports.account = (req, res) => {
  const { _id, username, email } = req.user;
  console.log("hi", req.user);
  res.json({ _id, username, email });
  // res.send(_.pick(req.user, ["_id", "username", "email"]));
};

//localhost:3010.logout
module.exports.logout = (req, res) => {
  const { user, token } = req;
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(function() {
      res.send({ notice: "successfully logged out" });
    })
    .catch(function(err) {
      res.send(err);
    });
};
