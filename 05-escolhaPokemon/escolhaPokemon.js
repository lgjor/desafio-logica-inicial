let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador ===  2) {
    pokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5){
    pokemonEscolhido = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if (pokemonEscolhido) {
    console.log("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}