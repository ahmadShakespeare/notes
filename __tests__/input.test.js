'use strict';

const Input = require('../lib/input.js');

// Bad Inputs 
const badInput1 = [];
const badInput2 = ['sth ain\'t right'];
const badInput3 = ['-b', 'wrong'];
const badInput4 = ['-a', ''];

// Good Input
const goodInput = ['-a', 'Notesy is noting!!'];

describe('Bad Inputs are handled right', () => {
  it('handles empty input', ()=> {
    let result = new Input(badInput1);
    expect(result.valid()).toBeFalsy();
  });

  it('Handles wrong input', () => {
    let result = new Input(badInput2);
    expect(result.valid()).toBeFalsy();
  });

  it('Handles wrong Flag', () => {
    let result = new Input(badInput3);
    expect(result.valid()).toBeFalsy();
  });

  it('Handles wrong data type', () => {
    let result = new Input(badInput4);
    expect(result.valid()).toBeFalsy();
  });
});

describe('Good inputs are handled right', () => {
  it('Handles good input for -a flag', () => {
    let result = new Input(goodInput);
    expect(result.valid()).toBeTruthy();
  });
});