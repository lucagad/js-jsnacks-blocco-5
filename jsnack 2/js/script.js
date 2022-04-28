// Jsnack 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

//Array contenente 10 varietà di zucchine
const typeZucchinis = [

  {
    variety: "Zucchina nera di Milano",
    weight: 30,
    length: 20
  },

  {
    variety: "Zucchina romanesca",
    weight: 25,
    length: 25
  },

  {
    variety: "Zucchina ortolana",
    weight: 30,
    length: 20
  },

  {
    variety: "Zucchina lunga fiorentina",
    weight: 35,
    length: 28
  },

  {
    variety: "Zucchina siciliana",
    weight: 20,
    length: 12
  },

  {
    variety: "Zucchina striata di Napoli",
    weight: 15,
    length: 10
  },

  {
    variety: "Zucchina bianca triestina",
    weight: 15,
    length: 14
  },

  {
    variety: "Zucchina rigata pugliese",
    weight: 18,
    length: 11
  },

  {
    variety: "Zucchina tonda di Piacenza",
    weight: 50,
    length: 15
  },

  {
    variety: "Zucchina tonda di Nizza",
    weight: 50,
    length: 15
  }
];

console.log(typeZucchinis);

//Array che conterrà le varietà di zucchine più lunghe di 15cm
const zucchinisLarger15 = [];
let totalWeightLarger = 0;

//Array che conterrà le varietà di zucchine più corte di 15cm
const zucchinisLess15 = [];
let totalWeightLess = 0;

for (let zucchina of typeZucchinis) {

  let l = zucchina.length;
  let w = zucchina.weight;

  if (l > 15) {

    zucchinisLarger15.push(zucchina);
    totalWeightLarger += w;

  } else {

    zucchinisLess15.push(zucchina);
    totalWeightLess += w;

  }
  
}

console.log("ARRAY LARGER 15 --->",zucchinisLarger15);
console.log("ARRAY LARGER 15 - WEIGHT --->",totalWeightLarger);

console.log("ARRAY LESS 15 --->",zucchinisLess15);
console.log("ARRAY LESS 15 - WEIGHT --->",totalWeightLess);

