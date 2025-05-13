class ItemMagico {
//TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
  constructor(tipoItem,dano,resistenciaItem) {
    this.tipo = tipoItem;
    this.dano = dano;
    this.resistencia = resistenciaItem;
  }

  calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = "arma"//gets();
const dano = 800; //parseInt(gets());
const resistenciaItem = 600; //parseInt(gets());

const itemPersonalizado = new ItemMagico(tipoItem,dano,resistenciaItem);

// TODO: Imprima os atributos do item personalizado
console.log("Tipo: " +itemPersonalizado.tipo);
console.log("Dano: " +itemPersonalizado.dano );
console.log("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);