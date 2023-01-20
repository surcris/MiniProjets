/* eslint-env node, es6 */

const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const READ_OPTIONS = 'UTF-8';
const INDEX_URL = 'd:/Document/Projet/Tuto Web/MiniProjets/index.html';
module.exports = async() => {
    //opération

    //récupérer le contenu du fichier HTML
    const contenu =  await readFileAsync(INDEX_URL,READ_OPTIONS)
    //retourner le contenu du fichier HTML
    //readFile('D:/xx',{encoding: 'UTF-8'},)

    return contenu;
}