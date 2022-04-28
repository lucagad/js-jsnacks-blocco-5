// Jsnack 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const typeZuchinis = [

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

console.log(typeZuchinis);

let totalWeight = 0;

for (let zucchina of typeZuchinis) {

  let w = zucchina.weight;
  console.log("PESO ZUCCHINA -->",w);
  totalWeight += w;
  
}

console.log("PESO TOTALE -->",totalWeight);