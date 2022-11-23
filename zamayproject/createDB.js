var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("zamayproject");
database.dropDatabase()
database = client.db("zamayproject");
const cats = database.collection("zamay");
const result = await cats.insertOne({name:"Облепиха"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
