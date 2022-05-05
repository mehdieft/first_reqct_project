const Sequelize=require('sequelize');
const sequelize=require('../util/database');



const user=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    family:{type:Sequelize.STRING,allowNull:false},
    email:{type:Sequelize.STRING,allowNull:false,unique:true},
    phone:{type:Sequelize.STRING,allowNull:false,unique:true}
})
module.exports=user;