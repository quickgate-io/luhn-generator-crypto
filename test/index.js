import luhn from '../index.js';

const random = luhn.random(16)
const valid = luhn.validate(random)

console.log(valid); // should be true