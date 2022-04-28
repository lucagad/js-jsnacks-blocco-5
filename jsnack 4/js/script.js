
// Jsnack 4
// Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
// Stampa a schermo la bici con peso minore utilizzando destructuring e template literal


const bikes = [

  {
    name: "Bike 1",
    weight: 30,
    img: "img/bike1.jpeg"
  },

  {
    name: "Bike 2",
    weight: 25,
    img: "img/bike2.jpeg"
  },

  {
    name: "Bike 3",
    weight: 40,
    img: "img/bike3.jpeg"
  },

  {
    name: "Bike 4",
    weight: 50,
    img: "img/bike4.jpeg"
  },

  {
    name: "Bike 5",
    weight: 45,
    img: "img/bike5.jpeg"
  }
];

// Oggetto che conterrà le info della bici più pesa
let heavierBike = {
  name: "",
  weight: 0,
  img: ""
};


const catalogueBox = document.querySelector(".bike_catalogue");

const heavierBox = document.querySelector(".heavier_bike_box");


console.log(heavierBike);
console.log(bikes);

stampCatalogue(bikes);

stampHeavierBike(heavierBike);

// Funzione che stampa l'intero catalogo di bici da corsa
function stampCatalogue (arrayBike){
  
  // Ciclo per stampare tutte le card delle bici da corsa
  for (const bike of arrayBike) {
  
    const {name, weight, img} = bike;

    catalogueBox.innerHTML += `
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="350px" height="150px" src="${img}"></img>
  
            <div class="card-body">
              <p class="bike_name card-text">Nome: ${name}</p>
              <p class="bike_weight card-text">Peso: ${weight} Kg</p>
            </div>
          </div>
        </div>
    `;

    // Se la bici è più pesa dell'oggetto heavierBike sostituisce le info di quest'ultima con la bici in esame
    if( weight > heavierBike.weight){
      heavierBike = bike;
      console.log(heavierBike);
    }
  
    console.log("NOME: --->", name);
    console.log("PESO: --->", weight);

  }

}

// Funzione che stampa la bici più pesante
function stampHeavierBike (bike){
  
  const {name, weight, img} = bike;

  heavierBox.innerHTML += `
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="350px" height="150px" src="${img}"></img>
  
            <div class="card-body">
              <p class="bike_name card-text">Nome: ${name}</p>
              <p class="bike_weight card-text">Peso: ${weight} Kg</p>
            </div>
          </div>
        </div>
    `;

}
