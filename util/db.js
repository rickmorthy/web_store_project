const Sequelize = require('sequelize');

const sequelize = new Sequelize('store_db','root','Aceraspire5560!',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;