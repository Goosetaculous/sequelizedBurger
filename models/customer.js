

module.exports = function(sequelize, DataTypes) {
    var customer = sequelize.define("customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        customer_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // burger_id:{
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
    });

    customer.assoicate =  (models)=>{
        customer.hasMany(models.burger,{
            foreignKey: {
                allowNull: true
            }
        })

    }
    return customer;
};