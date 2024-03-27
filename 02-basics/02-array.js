let marvelHearos = ["ironman", "hulk", "thore"];
let dcHearos = ["superman", "batman", "flash"];

//marvelHearos.push(dcHearos);

//marvelHearos.concat(dcHearos);

let allHeros = marvelHearos.concat(dcHearos);
allHeros = [...marvelHearos,...dcHearos];


let newarr = [1, 2, 3, [4, 5], 6, 7, [45], 264];
let set = newarr.flat()


console.log(set);
console.log(Array.from('Naitik'));


let score1 = 264;
let score2 = 10000;
let score = 49;

console.log(Array.of(score1,score2,score));