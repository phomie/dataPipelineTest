const spicedPG = require("spiced-pg");

var dbUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:try2begood@localhost:5432/TheMockedDataTEam";
const db = spicedPG(dbUrl);

exports.getrandomdata = () => {
  return db.query("SELECT * FROM themockeddatateam;");
};
exports.getrandomcontactsdata = () => {
  return db.query("SELECT * FROM themockeddatacontacts;");
};
exports.getrandommockbardata = () => {
  return db.query("SELECT * FROM mockbardata;");
};
exports.getrandommocklinedata = () => {
  return db.query("SELECT id,color, json_agg(json_build_object('x', x, 'y', y)) AS data FROM transport_data WHERE id IN ('japan', 'france', 'us') GROUP BY id, color;");
};
exports.getrandommockpiedata = () => {
  return db.query("SELECT * FROM mockpiesdata;");
};