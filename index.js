const { Sequelize, QueryTypes } = require('sequelize');
require('dotenv').config()
const columnAData = require('./xls')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});


const start = async () => {
    try {
        // await sequelize.authenticate();
        const query = columnAData?.map(async get => {
            const result = await sequelize.query(get, { type: QueryTypes.UPDATE });
            return result
        })
        console.log(query)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start(); 