const TIMESTAMP =  require('sequelize-mysql-timestamp')(sequelize)

module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        burger_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        devoured:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        date:{
            type: DataTypes.NOW,
            defaultValue: Sequelize.NOW
        }
    });
    return burger;
};