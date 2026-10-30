// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];


const heroi = {
    nome: "Magno",
    vida: 10,
    dano: 3,
    veneno: 0,
    critico: 0.2,
    danoCritico: 2,
    inventario: [],
    sorte: Math.random(),
    esquiva: 0.2
}

const aranha = {
    nome: "aranha da caverna",
    vida: 10,
    dano: 2,
    chance: 0.4,
    danoVeneno: 3
}


// console.log(heroi.vida);
// heroi.vida = 15;
// heroi = 15; // erro de constante sendo mudada (TypeError: Assignment to constant variable.)
// console.log(heroi.vida);

// console.log(heroi.inventario)

// console.log("O heroi: ", heroi.nome + 'Recebeu o item: ' + heroi.inventario[0])

// console.log(heroi)


function tomarDano(heroi, inimigo) {
    heroi.vida = heroi.vida - inimigo.dano
    let chance = Math.random()

    if (heroi.sorte >= chance) {
        console.log("Deu sorte, ")
    } else if (chance <= inimigo.chance) {
        heroi.veneno = inimigo.danoVeneno
        console.log("A aranha de injeta o veneno em você", + heroi.veneno + "O heroi se sente mal...")
    }

    if (heroi.vida <= 0) {
        console.log("Foi ver se no ceu tem pão")
    }
}

tomarDano(heroi, aranha)
