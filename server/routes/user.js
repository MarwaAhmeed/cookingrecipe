const express = require("express");
const authController = require("../controllers/user");
const router = express.Router();


router.post("/register", (req, res, next) => {
  authController
    .register(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(422).send(err.message);
    });
});

router.post("/login", (req, res, next) => {
  console.log("in login");
  authController
    .login(req.body)
    .then((token) => {
      res.json(token);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(422).send("wrong please try again");
    });
});



module.exports = router;
