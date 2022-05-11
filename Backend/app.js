const path = require('path');
const sequelize=require('./util/database');
const express = require('express');
const bodyParser = require('body-parser');
const Product=require('./models/product');
const User=require('./models/user');
const mongoConnect=require('./util/mongodbDatabase');


const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);


// Product.belongsTo(User,{constrainst:true,onDelete:'CASCADE'});
// User.hasMany(Product);
// sequelize.sync({force:true}).then((res)=>{
//     // console.log("database ",res)
//     app.listen(2000);
// }).catch((err)=>{
//     console.log("erro",err)
// })

mongoConnect((client)=>{
    app.listen(2000);
    console.log(client)
})