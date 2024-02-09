require('dotenv').config();
const { Pool } = require('pg');

const dataBase = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATA_BASE,
  port: 5432,
  allowExitOnIdle: true,
})

dataBase.on('connect', () => {
  console.log('Conexión establecida con la base de datos');
});

dataBase.on('error', (error) => {
  console.error('Error en la conexión con la base de datos:', error.message);
});


module.exports = dataBase

