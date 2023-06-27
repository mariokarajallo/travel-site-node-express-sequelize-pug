import Sequelize from "sequelize";

const db = new Sequelize("agencia_viajes_db", "root", "12345", {
  host: "127.0.0.1",
  port: "3306",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 4,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
});

export default db;
