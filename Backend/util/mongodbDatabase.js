const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnet=(callback)=>{

    MongoClient.connect('mongodb://localhost:27017').then((res) => {
        console.log("success", res)
        callback(res)
    }).catch((err) => {
        console.log("erro on mongodb", err);
    })
}
module.exports = mongoConnet
