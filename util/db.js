const Sequelize = require('sequelize');

const sequelize = new Sequelize('store_db','brutus','1111',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;