class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = this.defineTipoDoAtaque(tipo);
  }


  defineTipoDoAtaque(tipo) {
    // Definindo o tipo de ataque
        if (tipo === "mago") {
            return "magia";
        } else if (tipo === "guerreiro") {
            return "espada";
        } else if (tipo === "monge") {
            return "artes marciais"
        } else if (tipo === "ninja") {
            return "shuriken";
        } else {
            return "Tipo de ataque inválido";
        }
  }

  atacar(){
    console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
  }

}

mago = new heroi("Goku", 30, "mago");
guerreiro = new heroi("Vegeta", 35, "guerreiro");
monge = new heroi("Gohan", 25, "monge");
ninja = new heroi("Piccolo", 28, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();