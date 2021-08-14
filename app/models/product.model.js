module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("goods", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING(1000)
    },
    color:{
      type: Sequelize.STRING
    },
    volume:{
      type: Sequelize.INTEGER
    },
    cost:{
      type: Sequelize.DOUBLE
    },
    image:{
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};
