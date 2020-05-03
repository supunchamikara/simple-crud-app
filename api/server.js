const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

const businessRoute = require('./business.route');``

const mongoUrl = "mongodb://localhost:27017/crud";

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(
  (onfulfilled = () => {
    console.log("database is connected..");
  }),
  (onrejected = err => {
    console.log("cannote connect to the database", err);
  })
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(PORT, () => {
  console.log("Server is listning to port : ", PORT);
});
