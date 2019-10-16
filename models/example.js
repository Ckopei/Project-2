module.exports = function(sequelize, DataTypes) {
  var BabyNames = sequelize.define("BabyNames", {
    Year_of_birth: DataTypes.INT,
    sex: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    name: DataTypes.STRING,
    occurences: DataTypes.INT,
    name_rank: DataTypes.INT
  });
  return BabyNames;
};
