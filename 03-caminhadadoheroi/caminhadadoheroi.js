const posicaoInicial = 0;
const totalPassos = 16;
let posicaoFinal = caminhar(posicaoInicial, totalPassos);

function caminhar(posicaoInicial, totalPassos){
    return posicaoInicial + totalPassos;
}

// Imprime a posição final
console.log("Posicao final do heroi:", posicaoFinal);