module.exports = {
  HOST: "localhost",
  USER: "marik8998",
  PASSWORD: "marik8998",
  DB: "shop_main",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,

    acquire: 30000,
    idle: 10000
  }

};
