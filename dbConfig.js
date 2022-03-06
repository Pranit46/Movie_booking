const mongodb = require('mongodb');
require('dotenv').config()
const MongoClient = mongodb.MongoClient;
const dbUrl = process.env.connection
module.exports ={dbUrl,mongodb,MongoClient};
