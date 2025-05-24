const { Router } = require("express");
 const { createUser, Login } = require("../controllers/user.controler");
 
 const USER_ROUTES = Router();
 
 USER_ROUTES.post("/createUser", createUser);
 USER_ROUTES.post("/Login", Login);
 USER_ROUTES.get("/test", (req, res) => res.status(200).json({ batata: "red" }));

 
 module.exports = USER_ROUTES;