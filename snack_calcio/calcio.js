// Creo array squadre di calcio
const listTeam = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
]

// Individuo i contenitori dove inserire l'html tramite js

const teamPreGame = document.getElementById("list_pre_team")

const teamPostGame = document.getElementById("list_post_team")

// Creo nuovo array da visualizzare in console con punti e falli
// random

const listTeamPostGame = []

// Creo un ciclo che mi permette di individuare singolarmente ogni proprietà
for (let i = 0; i < listTeam.length; i++) {
    const singleTeam = listTeam[i];

    let { nome, puntiFatti, falliSubiti } = singleTeam

    // inserisco nell'html le chiavi da visualizzare
    teamPreGame.innerHTML += `<li>
                                <h3>${nome}</h3>
                                <p>punti fatti: ${puntiFatti}</p>
                                <p>falli subiti: ${falliSubiti}</p>
                              </li>`

    // creo numeri random da sostituire alle diverse chiavi
    puntiFatti = getRandomNum(0, 5)
    falliSubiti = getRandomNum(0, 10)

    // pusho nell'array i nuovi valori
    listTeamPostGame.push({ nome, puntiFatti, falliSubiti })

    // Infine inserisco nell'html i nuovi valori
    teamPostGame.innerHTML += `<li>
                                  <h3>${nome}</h3>
                                  <p>falli subiti: <span class="num_mark">${falliSubiti}</span></p>
                               </li>`
}

console.log(listTeam);
console.log(listTeamPostGame);


/******************************************************
FUNZIONI
******************************************************/

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
