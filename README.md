# passph

A utility for generating memorable mnemonic passwords (passphrases)  

## Install

```
npm i passph
```

## Usage

```JavaScript
const passph = require('passph');

pass1 = passph.gen(4, '*'); // food*viewpoint*crabbing*character
pass2 = passph.gen(2);      // freeness helping
pass3 = passph.gen(5, "^"); // revoke^customize^handiness^survivor^stooge

console.log(pass1); // food*viewpoint*crabbing*character
console.log(pass2); // freeness helping
console.log(pass3); // revoke^customize^handiness^survivor^stooge
```

## Other

EFF's Long Wordlist from https://www.eff.org/dice.