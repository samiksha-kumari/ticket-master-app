const express = require("express"); //requiring express in every single file
const router = express.Router(); //responsible for routing mechanism , Routing - incoming Http method, url is met u have to invoke a function/mini object

const customerController = require("../app/controllers/customerController");

router.get("/customers", customerController.list);
router.post("/customers", customerController.create);
router.get("/customers/:id", customerController.show);
router.delete("/customers/:id", customerController.destroy);
router.put("/customers/:id", customerController.update);
//console.log(customerController);

const departmentController = require("../app/controllers/departmentController");

router.get("/departments", departmentController.list);
router.post("/departemnts", departmentController.create);
router.get("/departments/:id", departmentController.show);
router.delete("/departments/:id", departmentController.destroy);
router.put("/departments/:id", departmentController.update);

const employeeController = require("../app/controllers/employeeController");

router.get("/employees", employeeController.list);
router.post("/employees", employeeController.create);
router.get("employees/:id", employeeController.show);
router.delete("employees/:id", employeeController.destroy);
router.put("employees/:id", employeeController.update);

const ticketController = require("../app/controllers/ticketController");

router.get("/tickets", ticketController.list);
router.post("/tickets", ticketController.create);
router.get("/tickets/:id", ticketController.show);
router.delete("/tickets/soft_delete/:id", ticketController.softdestory);
router.delete("/tickets/:id", ticketController.destroy);
router.put("/tickets/:id", ticketController.update);

module.exports = router;
//exports is an object//when u hav multiple u have to pass as an object
