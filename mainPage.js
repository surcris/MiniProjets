
// require('dotenv').config();

// const { MongoClient } = require("mongodb");
// const client  = new MongoClient(process.env.MONGO_URL);

// async function main() {
//     await client.connect();
//     console.log("Connection OK");
//     // const db = client.db('user');
//     // const collection = db.collection('Utilisateur');
//     // var myobj = [
//     // { name: 'Peter', address: 'Lowstreet 4'},
//     // { name: 'Amy', address: 'Apple st 652'}];
//     // await collection.insertMany(myobj);
//     // console.log("1 document inserted");
//     //console.log('document insérés => ${insertstuff}');
//     return 'done!';
// }

// main()
// .then(console.log)
// .catch(console.error)
// .finally(() => client.close())

/* eslint-env node, es6 */
const fs = require('fs');
const express = require('express');
const PORT = 6300
// créer un app express.
const app = express();
//const pageAcceuil = require('pagePFC.js')

app.get('/',async(req,res) => {
    //const indexHTML = await pageAcceuil
    fs.readFile('./PFC/pfc.html', function(err, data){
        res.send(data.toString());
        });
    //res.send('Hello world !');
})

app.use('/styles', express.static('d:/Document/Projet/Tuto Web/MiniProjets/PFC'))
app.use('/images', express.static('d:/Document/Projet/Tuto Web/MiniProjets/PFC/images'))

app.listen(PORT, () => {
    console.log(`serveur démarré : http://localhost:${PORT}`);
})