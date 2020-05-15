'use strict'; 

//requiring all the needed modules, the is the index of our application

let Input = require('./lib/input.js');
let Notes = require('./lib/notes.js');

// this is the parsed input coming from the terminal
let parsedInput = new Input(process.argv.slice(2));

// this is to instantiate new Notes by adding the parsedInput
let notes = new Notes(parsedInput);