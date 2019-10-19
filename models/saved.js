/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
module.exports = function (sequelize, DataTypes) {
  var BabyName = sequelize.define("Saved", {
    user_name: DataTypes.INTEGER,
    baby_name: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    name: DataTypes.STRING,
    occurences: DataTypes.INTEGER,
    name_rank: DataTypes.INTEGER
  });
  return BabyName;
};
