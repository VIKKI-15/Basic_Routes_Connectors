const express = require("express");
const path = require("path");
const app = express();

module.exports = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "login.html");
  // the ".." (double dot) means go back two time in directory
  // ways to provide file path
  // 1= __dirname, "/public/login.html";
  // 2 = __dirname, "public","login.html"
  res.sendFile(filePath);
};
