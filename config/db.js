import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.PLANETSCALE_DB,
  process.env.PLANETSCALE_DB_USERNAME,
  process.env.PLANETSCALE_DB_PASSWORD,
  {
    host: process.env.PLANETSCALE_DB_HOST,
    port: "3306",
    dialect: "mysql",
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorAliases: false,
  }
);

export default db;
