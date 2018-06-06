module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  //   // Giving the User model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 20]
    }
  });

  User.associate = function(models) {
  //   // Associating User with chat messages

    User.hasMany(models.Chat, {

    });
  };

  User.create({
    name: "Bob the Tester",
  });
 

  return User;
};