const spicedPG = require("spiced-pg");

var dbUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:try2begood@localhost:5432/TheMockedDataTEam";
const db = spicedPG(dbUrl);

exports.getrandomdata = () => {
  return db.query("SELECT * FROM themockeddatateam;");
};