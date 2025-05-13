let num1 = parseInt(gets());
let num2 = parseInt(gets());

function calcularXp(num1,num2){
  return num1 * num2 * 100;
}

//TODO: Implemente a lógica para exibir o xpGanho:
let xpGanho = calcularXp(num1,num2);

// Imprime a quantidade de XP ganho
console.log("Voce ganhou " + xpGanho + " XP!");