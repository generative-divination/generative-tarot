// Q: how to use this client-side?
// const SunCalc = require('suncalc');

const cards = ['card1'];
console.log(draw());

function draw() {
    return cards[Math.floor(Math.random() * cards.length)];
}
