const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const crypto = require("crypto");
class User extends Model {}
User.init(
  {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    username: DataTypes.STRING,
    givenName: DataTypes.STRING,
    surname: DataTypes.STRING,
    DateOfBirth: DataTypes.DATEONLY,
  },
  { sequelize, modelName: "user" }
);

async function setupFakeUsers(sequelize, users) {
  await sequelize.sync();
  users.forEach(async (user) => {
    const r = await User.create({
      id: crypto.randomUUID,
      username: user.username,
      givenName: user.givenName,
      surname: user.surname,
      DateOfBirth: user.dateofbirth,
    });
    console.log(r.username);
  });
}

userlist = [
  {
    username: "User1",
    givenName: "King",
    surname: "summers",
    dateofbirth: "1998-05-23T00:00:00.00Z",
  },
  {
    username: "User2",
    givenName: "Oscar",
    surname: "summers",
    dateofbirth: "2015-10-23T00:00:00.00Z",
  },
];

async function setup() {
  setupFakeUsers(sequelize, userlist);
  await sequelize.sync();
  const r = await User.findAll();
  console.log(JSON.stringify(r));
  return r;
}

exports.setup = setup;

exports.sequelize = sequelize;
exports.User = User;
