const { Sequelize } = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/college_academic',
  {
    dialect: 'postgres',
    dialectModule: pg,
    logging: false,
    dialectOptions: process.env.DATABASE_URL
      ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
      : {},
  }
);

module.exports = { sequelize };