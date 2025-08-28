# Cryptographic Luhn Generator
A generator of numbers (using cryptographic randomness function randomBytes) that passes the validation of Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm

## About
This package is a fork of [luhn-generator](https://github.com/rromanovsky/luhn-generator).  
It replaces Math.random() with crypto.randomBytes() for stronger randomness.

```
npm install luhn-generator-crypto --save
```

## Usage

```js
$ node
> import luhn from 'luhn-generator-crypto';
> luhn.generate(1, { pad: 12 }); // 000000000018
```