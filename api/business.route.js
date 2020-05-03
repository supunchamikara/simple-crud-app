const express = require("express");
const businessRoutes = express.Router();

let Business = require("./business.model");

// store
businessRoutes.route("/add").post((req, res) => {
  let business = new Business(req.body);
  console.log(business);
  business
    .save()
    .then(business => {
      res.status(200).json({ business: "business is added sucessfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save database");
    });
});

// get data
businessRoutes.route("/").get((req, res) => {
  Business.find((err, business) => {
    err ? console.log(err) : res.json(business);
  });
});

// edit data
businessRoutes.route("/edit/:id").get((req, res) => {
  let id = req.params.id;
  Business.findById(id, (err, business) => {
    res.json(business);
  });
});

// update data
businessRoutes.route("/update/:id").post((req, res) => {
  Business.findById(req.params.id, (err, business) => {
    if (!business) res.status(404).send("data is not found");
    else {
      console.log(req.body);
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.person_nic = req.body.person_nic;

      business
        .save()
        .then(business => {
          res.json("update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update database");
        });
    }
  });
});

// delete data
// businessRoutes.route("/delete/:id").post((req, res) => {
//   console.log(req.params.id);
//   Business.findByIdAndRemove({ id: req.params.id }, (err, business) => {
//     err ? res.json(err) : res.json("sucessfully removed");
//   });
// });

businessRoutes.route('/delete/:id').delete((req, res, next) => {
  Business.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});


module.exports = businessRoutes;
