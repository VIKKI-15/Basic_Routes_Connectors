const express = require("express");
const app = express();
const NoPage = require("./controllers/nopageController");
const loginCont = require("./controllers/loginController");
const regCont = require("./controllers/registerController");

// app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//Route to 404 Page
app.get("/", NoPage);

// Route to Register Page
app.get("/register", regCont);

// Route to Login Page
app.get("/login", loginCont);

//Server Listen
const port = 3000;
app.listen(port, () => {
  console.log("Server is listening on port ", port);
});
