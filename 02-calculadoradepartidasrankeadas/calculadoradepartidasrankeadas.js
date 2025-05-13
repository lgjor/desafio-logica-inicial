function calculadoraDePartidasRankeadas(qtVitorias, qtDerrotas) {
    resultado = qtVitorias - qtDerrotas;
    return resultado;
};

function calcularNivelHeroi(saldoVitorias) {
    let nivel;
    if (saldoVitorias <= 10) {
      nivel = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
      nivel = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
      nivel = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
      nivel = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
      nivel = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
      nivel = "Lendário";
    } else if (saldoVitorias > 101) {
      nivel = "Imortal"; // Adicionando um nível para XP maior que 10000
    }
    return nivel;
}

let saldoVitorias = calculadoraDePartidasRankeadas(10, 5);
let nivel = calcularNivelHeroi(saldoVitorias);
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
