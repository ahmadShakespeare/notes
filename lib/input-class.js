'use strict';

const minimist  = require('minimist');

// Input Class

class Input {
  constructor(args){
    this.command = {};
    let formatted = minimist(args);
    let objectKeysArray = Object.keys(formatted);

    for(let i=0; i<objectKeysArray.length;i++){
      let key = objectKeysArray[i];
      let val = formatted[key];
      switch (key) {
      case 'a':
      case 'add':
        this.command = { action: 'add', payload: val};
        return;
      default:
        break;
      }
    }
  }

  valid(){
    if(!this.command) false;
    if(!this.command.action) false;

    switch (this.command.action){
    case 'add':
      return typeof this.command.payload === 'string';
    default:
      break;
    }
  }
}

module.exports = Input;