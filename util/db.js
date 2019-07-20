const Sequelize = require('sequelize');

const sequelize = new Sequelize('store_db','root','1111',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;