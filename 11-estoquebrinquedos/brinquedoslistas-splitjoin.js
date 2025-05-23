// Simulação das funções "gets" e "print" para ambiente de teste
function gets() {
    // Por exemplo, você pode simular a entrada do usuário aqui:
    return "Carrinho:10, Boneca:3, Bloco de Montar:15";
}

function print(message) {
    console.log(message);
}

let dadosEntrada = gets(); // Lê a linha de entrada fornecida pelo usuário
let brinquedos = dadosEntrada.split(", "); // Divide a string em um array de brinquedos

let resultado = []; // Array para armazenar os resultados formatados

// Itera sobre cada item (brinquedo:quantidade) no array 'brinquedos' usando forEach
brinquedos.forEach(item => {
    let partes = item.split(":"); // Divide cada item em nome e quantidade

    let nome = partes[0]; // O primeiro elemento é o nome do brinquedo
    let quantidade = parseInt(partes[1]); // O segundo elemento é a quantidade, convertida para número inteiro

    // Verifica a quantidade e determina a situação do estoque
    if (quantidade < 5) {
        resultado.push(nome + ": Baixo"); // Se a quantidade for menor que 5, o estoque está "baixo"
    } else {
        resultado.push(nome + ": Adequado"); // Caso contrário, o estoque está "adequado"
    }
});

// Junta os resultados com ", " e imprime a saída formatada
print(resultado.join(", "));