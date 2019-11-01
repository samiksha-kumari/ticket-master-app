const express = require("express"); //requiring express in every single file
const router = express.Router(); //responsible for routing mechanism , Routing - incoming Http method, url is met u have to invoke a function/mini object

const { authenticateUser } = require("../app/middlewares/authentication");
const customerController = require("../app/controllers/customerController");

router.get("/customers", authenticateUser, customerController.list);
router.post("/customers", authenticateUser, customerController.create);
router.get("/customers/:id", authenticateUser, customerController.show);
router.delete("/customers/:id", authenticateUser, customerController.destroy);
router.put("/customers/:id", authenticateUser, customerController.update);
//console.log(customerController);

const departmentController = require("../app/controllers/departmentController");

router.get("/departments", authenticateUser, departmentController.list);
router.post("/departments", authenticateUser, departmentController.create);
router.get("/departments/:id", authenticateUser, departmentController.show);
router.delete(
  "/departments/:id",
  authenticateUser,
  departmentController.destroy
);
router.put("/departments/:id", authenticateUser, departmentController.update);

const employeeController = require("../app/controllers/employeeController");

router.get("/employees", authenticateUser, employeeController.list);
router.post("/employees", authenticateUser, employeeController.create);
router.get("/employees/:id", authenticateUser, employeeController.show);
router.delete("/employees/:id", authenticateUser, employeeController.destroy);
router.put("/employees/:id", authenticateUser, employeeController.update);

const ticketController = require("../app/controllers/ticketController");

router.get("/tickets", authenticateUser, ticketController.list);
router.post("/tickets", authenticateUser, ticketController.create);
router.get("/tickets/:id", authenticateUser, ticketController.show);
router.delete(
  "/tickets/soft_delete/:id",
  authenticateUser,
  ticketController.softdestory
);
router.delete("/tickets/:id", authenticateUser, ticketController.destroy);
router.put("/tickets/:id", authenticateUser, ticketController.update);

const userController = require("../app/controllers/userController");

router.post("/users/register", userController.register);
router.post("/users/login", userController.login);
router.get("/users/account", authenticateUser, userController.account);
router.delete("/users/logout", authenticateUser, userController.logout);

module.exports = router;
//exports is an object//when u hav multiple u have to pass as an object
