// const aluno1 = "Gabriel";
// const media1 = 8;
// const mediaDaescola = 6;

// if(media1 >= mediaDaescola){
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

// const aluno2 = "Joao";
// const media2 = 5;

// if(media2 >= mediaDaescola){
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

// const aluno3 = "Vitor";
// const media3 = 6;

// if(media3 >= mediaDaescola){
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }


// const medias = [8.5, 6, 5, 9.2, 4, 8]
// const nomes = ["Gabriel", "Jurandir", "Jorge", "Joao", "Jurema", "Joselvan"]

// // console.log("Aluno: " + nomes[3] + " Media: " + medias[3])

// for (let i = 0; i < medias.length; i+=1) {
//     if (medias[i] >= 7) {
//         console.log(nomes[i] + " Aprovado")
//     } else {
//         console.log(nomes[i] + " Reprovado")
//     }
// };


const medias = [8.5, 6, 5, 9.2, 4, 8]
let soma = 0
let aprovados = 0
console.log(medias.length)
for (let i = 0; i < medias.length; i++) {
    soma = soma + medias[i]  // i = 5
    //      40.7
    if (medias[i] >= 7) {
        aprovados++
    }
}

console.log("Aprovados: " + aprovados);
console.log("Media da turma: " + (soma / medias.length).toFixed(2));