var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
  // console.log(babyName);
  // console.log(user);
  // res.render("index", { name: "hey" });
  res.render("index", { layout: "singular.handlebars" });
});


router.post("/search", function (req, res) {
  var genderChoice = req.body.gender;
  var ethnicityChoice = req.body.ethnicity;
  var startingLetter = req.body.startingLetter;
  var resultNum = req.body.resultNum;

  db.babyName.findAll({
    where: {
      sex: genderChoice,
      ethnicity: ethnicityChoice,
      name: {
        $like: startingLetter + "%"
      }
    },
    limit: resultNum
  }).then(function (results) {
    res.json(results);
  });
});

// router.put("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;
//   var dev = "devoured = " + req.body.devoured;

//   console.log("condition", condition);

//   burger.update(dev, condition, function (result) {
//     if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function (result) {
//     if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;