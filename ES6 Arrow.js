//ES5 Map Callback

const double = arr => arr.map(val => val * 2);

//Big Refactor

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);