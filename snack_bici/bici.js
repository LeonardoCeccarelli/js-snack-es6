// Creo array contenente oggetti

const listaBici = [
    {
        nome: "Mountain Bike"
    },
    {
        nome: "E-Bike"
    },
    {
        nome: "Bici da corsa"
    },
    {
        nome: "Bici da cross"
    },
    {
        nome: "City Bike"
    }
]

const listContainer = document.getElementById("list_container")

const lightBikeContainer = document.querySelector(".item_container")

// Array dei pesi di tutte le bici
const totalWeight = []

// Ciclo l'array aggiungendo ad ogni oggetto una proprietà
// con chiave peso e valore pseudo-casuale

for (let i = 0; i < listaBici.length; i++) {
    const singleBike = listaBici[i];

    // Genero numero casuale grazie alla funzione e stabilisco il peso
    singleBike.peso = getRandomNum(5, 60)

    // Estrapolo il peso e lo aggiungo in un array esterno
    const { peso } = singleBike

    // Mano a mano inserisco il peso nell'array contenente tutti i pesi
    totalWeight.push(peso)

    // Inserisco il tutto nell'html
    listContainer.innerHTML += `<li>
                                    <h3>${singleBike.nome}</h3>
                                    <p>${peso}</p>
                                </li>`
}

// Ordino la lista con il peso minore in posizione 0
const orderWeight = totalWeight.sort(function (a, b) { return a - b })

// Creo un array vuoto dove inserirò il nome della bici che avrà
// il peso uguale a quello minore
const bikeWeight = []

// ciclo la lista delle bici con stavolta inserita la chiave peso
for (let i = 0; i < listaBici.length; i++) {
    const item = listaBici[i];

    // Se corrisponde al valore più basso dell'array di tutti i pesi 
    // puho il nome nell'array delle bici leggere
    if (orderWeight[0] === item.peso) {
        bikeWeight.push(item.nome)
    }

}

// Stampo nell'html il nome della/e bici più leggera/e
lightBikeContainer.innerHTML += `<div>
                                <h3>Bici più leggere</h3>
                                <p>${bikeWeight}</p>
                                </div>`



/******************************************************
FUNZIONI
******************************************************/

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}