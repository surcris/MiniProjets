/* eslint-env node, es6 */

//const {readFile} = require('fs');
const fs = require('fs');
// const {promisify} = require('util');
// const readFileAsync = promisify(readFile);

// const READ_OPTIONS = 'UTF-8';
// const INDEX_URL = 'd:/Document/Projet/Tuto Web/MiniProjets/PFC/pfc.html';
// module.exports = async() => {
//     //opération

//     //récupérer le contenu du fichier HTML
//     //const contenu =  await readFileAsync(INDEX_URL,READ_OPTIONS);
//     const contenu =  await 
//     //retourner le contenu du fichier HTML
//     //readFile('D:/xx',{encoding: 'UTF-8'},)

//     return contenu;
// }

const data = fs.readFileSync('./pfc.html',
            {encoding:'utf8', flag:'r'});
 
// Display the file data
console.log(data);