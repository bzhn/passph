const wordlist = require('./wordlists/eff_large_wordlist.json');
const passph = {};

module.exports = {
    gen : (amount = 3, separator = ' ') => {
        if (typeof amount !== 'number' || separator == undefined) return new TypeError('amount is not a number. Correct usage: .gen(6) or .gen(5, "-") not .gen(' + amount + ')');
        password = [];
        for (let i = 0; i < amount; i++){
            let x = Math.floor((Math.random() * wordlist.length));
            password.push(wordlist[x]);
        }
        return password.join(separator); // For example snoring-degrading-barman
    }
};
