import "./start/addRequire.js";

require('dotenv').config();


const { MongoClient } = require("mongodb");
const client  = new MongoClient(process.env.MONGO_URL);

async function main() {
    await client.connect();
    console.log("Connection OK");
    const db = client.db('user');
    const collection = db.collection('Utilisateur');
    var myobj = [
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'}];
    await collection.insertMany(myobj);
    console.log("1 document inserted");
    //console.log('document insérés => ${insertstuff}');
    return 'done!';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close())

console.log("1 document inserted");