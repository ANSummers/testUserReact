var express = require("express");
var router = express.Router();
const { User, sequelize } = require("../src/db");
const { Op } = require("sequelize");
const { body } = require("express-validator");
const crypto = require("crypto");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  await sequelize.sync();
  const users = await User.findAll();

  res.send(JSON.stringify(users));
});

/*User Profile route. */
router.get("/profile/:userName", async function (req, res, next) {
  const user = await User.findOne({
    where: {
      username: {
        [Op.eq]: req.params.userName,
      },
    },
  });

  res.send(JSON.stringify(user));
});

router.post("/profile", async function (req, res, next) {
  await sequelize.sync();
  const r = await User.create({
    id: crypto.randomUUID,
    username: req.body.username,
    givenName: req.body.givenName,
    surname: req.body.surname,
    DateOfBirth: req.body.dateofbirth,
  });

  res.send(JSON.stringify(req.body));
});

module.exports = router;
