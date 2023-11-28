const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();

// Create a User using: POST "/api/auth". Doesn't require Auth
router.post("/", [body("name").isLength({ min: 3 }), body("email").isEmail(), body("password").isLength({ min: 5 })], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      res.json({ error: "Please enter a unique value for email", message: err.message });
    });
});

module.exports = router;
