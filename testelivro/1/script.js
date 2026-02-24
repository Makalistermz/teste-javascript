let book = {
    topic: "JavaScript", 
    edition: 7
};

console.log(book.topic);
console.log(book["edition"]);
console.log(book.autor = "Flanagan");

let primes = [2, 3, 5, 7];

console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length-1]); //ultimo elemento do array

let points = [  //um array com 2 elementos
    {x: 0, y: 0}, //cada elemento é um objeto
    {x: 1, y: 1}
];

/*
let data = [  //um objeto com duas propriedade
    trial1: [[1,2] [3,4]],
    trial2: [[2,3] [4,5]]
];
*/

console.log(points[0])