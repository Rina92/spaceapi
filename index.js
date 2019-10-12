const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/space');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to space database');
});


const app = express ();
app.use(bodyParser.json())
const Schema = mongoose.Schema;
const schema = new Schema({
    launch_year: String,
    mission_name: String,
}, { collection : 'test' });
const Space = mongoose.model('Space', schema);


app.get ('/', (req,res) =>{
    console.log("get called");
    Space.find({}, function(err, docs) {
        if (!err){ 
            console.log(docs);
            res.send(docs);
        } else {throw err;}
    });

});



app.listen(1200);



