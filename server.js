const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const item = require('./models/item');

const app = express();


// bodyParser middleWare;
app.use(bodyParser.json());


// // DB Config
// const db = require('./config/key').mongoURI;

// // Connect to Mongo
// mongoose.connect(db)
// .then( () => console.log('MongoDB Connected...') )
// .catch( err => console.log(err) );

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log('Server started on port '+ port));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://iam:<o8V66BuKO2LHi5Lz>@clusteriam-mccaz.mongodb.net/<mern-stack-shopping>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect()
.then( () => console.log('MongoDB Connected...') )
.catch( err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('MongoDB Connected...')
  client.close();
});

// User Routes
app.use = ('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port '+ port));
