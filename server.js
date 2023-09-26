const express = require("express");
const sequelize = require("./config/connection");
const session = require("express-session");
const exphhbs = require("express-handlebars");
const routes = require('./controllers');
const app = express();

const PORT = process.env.PORT || 3001;