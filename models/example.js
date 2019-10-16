module.exports = function(sequelize, DataTypes) {
  var BabyNames = sequelize.define("BabyNames", {
    Year_of_birth: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    name: DataTypes.STRING,
    occurences: DataTypes.INTEGER,
    name_rank: DataTypes.INTEGER
  });
  return BabyNames;
};
