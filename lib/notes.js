'use strict';

// Notes constructor function
function Notes(args){
  if(args.valid()) this.execute(args.command);
  else console.error('ERROR! Invalid argument sent to the app');
}

Notes.prototype.execute = function(command){
  switch(command.action) {
  case 'add':
    this.add(command.payload);
    break;
  default:
    break;
  }
};

Notes.prototype.add = function(payload) {
  let id = Math.floor(Math.random() * 1000);

  console.log('Adding note');
  console.log(id + ':', payload);
};


module.exports = Notes;