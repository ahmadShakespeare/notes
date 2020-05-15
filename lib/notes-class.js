'use strict';

class Notes {
  constructor(args){
    if(args.valid()) this.execute(args.command);
    else console.error('ERROR! Invalid argument sent to the app');
  }
  execute(command){
    switch(command.action){
    case 'add':
      this.add(command.action);
      break;
    default:
      break;
    }
  }
  add(payload){
    let id = Math.floor(Math.random() * 1000);
    console.log('Adding note');
    console.log(id + ':', payload);
  }
}

module.exports = Notes;