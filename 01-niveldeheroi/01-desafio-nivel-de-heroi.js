const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let heroi = {
    nome: "",
    xp: 0
  };

function criarHeroi() {
    return new Promise((resolve) => {
      readline.question("Digite o nome do herói: ", (nome) => {
        heroi.nome = nome;
        readline.question("Digite o nível de XP do herói: ", (xp) => {
          heroi.xp = parseInt(xp); // Converte a entrada para número
          resolve();
        });
      });
    });
}

function calcularNivelHeroi(xp) {
    let nivel;
    if (xp <= 1000) {
      nivel = "Ferro";
    } else if (xp > 1000 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp > 5000 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp > 7000 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp > 8000 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp > 9000 && xp <= 10000) {
      nivel = "Radiante";
    } else if (xp > 10000) {
      nivel = "Imortal"; // Adicionando um nível para XP maior que 10000
    }
    return nivel;
}

async function main() {
    await criarHeroi();
    const nivelDoHeroi = calcularNivelHeroi(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivelDoHeroi}`);
    readline.close();
  }
  Lucas
main();