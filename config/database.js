const mongoose = require("mongoose"); //we have to reference it

//db configuration
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/ticket-master-bk", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch(err => {
    console.log("error connecting to db", err);
  });

module.exports = mongoose;
