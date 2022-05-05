const Sequelize =require('sequelize');


const sequelize=new Sequelize("mernstack",'root','',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;