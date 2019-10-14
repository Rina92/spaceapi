const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require ('mongodb');
const mongoose = require('mongoose');
// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]


const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://jesrina:qazwsx10@space-xr9xr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (!err) {
        const collection = client.db("space").collection("test");
        console.log('successfully connected to space database');
        // perform actions on the collection object
        // client.close();
        // collection.find({}).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log('result:', result);
        //     db.close();
        // });
    }
  
});
const app = express ();
app.use(bodyParser.json());

app.get ('/', (req,res) =>{
    console.log("get called");
    const collection = client.db("space").collection("test");
    collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log('result:', result);
        res.send(result);
        // db.close();
    });

});

app.listen(process.env.PORT || 5000);
