/* console.log('hello nodeJs world');
console.log(process.platform);
console.log(process.env.USER) */


/* const {EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch',  () => {
console.log('yum');
})

eventEmitter.emit('lunch');
 */

/* 
const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt','utf8');
    console.log(file);
}
hello();

console.log('last line of code'); */
/* 
const  myModule  = require('./my-module');
console.log(myModule); */

const { json } = require('body-parser');
const express = require('express');
const { readFile } = require('fs');
const app = express();

app.get('/', (request, response) => {

    /* readFile('https://cloudwatchmentors.com/', 'utf8', (err, html) => {
        if(err){
            response.status(500).send(new json ({ message: 'sorry, out of order'}));
        }

        response.send(html);
    }) */
    response.send('<p>I am a full stack developer.</p>');
})

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));