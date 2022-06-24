// Do not expose your credentials in your code.
/* Filename: db.js
 Student: Saba Aziz
 StudentId: 301180623
 COMP 229
 Class:COMP 229
 */


//let atlasDB = "mongodb+srv://<username>:<passoword>@<cluster>/carstore?retryWrites=true&w=majority";
// password: 0n4JBnVJcntca0en
//username: SabaAziz
let atlasDB = "mongodb+srv://SabaAziz:0n4JBnVJcntca0en@cluster0.evxmf.mongodb.net/cars?retryWrites=true&w=majority"


// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}