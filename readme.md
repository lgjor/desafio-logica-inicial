# Desafios básicos de lógica de programação

## 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado*

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

### Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

### Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## 2️⃣ Calculadora de partidas Rankeadas

**O Que deve ser utilizado*

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

### Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

### Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## Desafios de código

### 3️⃣ Jornada do heroi

Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

Tarefa: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

Entrada
A posição inicial do herói na floresta (um número inteiro).

O número total de passos que o herói deve dar (um número inteiro).

Saída
Imprima a posição final do herói após dar a quantidade de passos especificada.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada: Saída

2 3    Posicao final do heroi: 5
5 3    Posicao final do heroi: 18
10 6   Posicao final do heroi: 16

### 4️⃣ Calculadora de XP

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Funções
- Estruturas de decisão

### Objetivo

Crie uma função que receba como parâmetros o nível do monstro e a dificuldade da batalha. A função deve calcular a quantidade de XP ganhos utilizando a fórmula `XP = nível do monstro * dificuldade * 100`. 

### Saída

Ao final, exiba uma mensagem com a quantidade de XP ganhos:
"Você ganhou **{XP}** XP!"

### Exemplos

Entrada:  
45 40  
Saída:  
"Você ganhou 180000 XP!"

Entrada:  
15 20  
Saída:  
"Você ganhou 30000 XP!"

Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. A cada vitória, você ganha XP e se aproxima de se tornar um lendário campeão.

Tarefa: Escreva um programa simples que simule o ganho de XP após derrotar um monstro. O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.

Calculo do XP: Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. A fórmula num1 * num2 * 100 é usada para calcular essa quantidade com base nos valores fornecidos.

Explicação:

num1: Este é o nível do monstro. Quanto maior o nível do monstro, mais XP você ganhará ao derrotá-lo. Portanto, multiplicar o nível do monstro por um valor maior ajudará a refletir o aumento da recompensa de XP para monstros mais poderosos.

num2: Este é o valor da dificuldade da batalha, variando de 1 a 100. Quanto maior a dificuldade da batalha, mais XP você deve ganhar para enfrentar um desafio maior. Multiplicar pela dificuldade ajuda a ajustar a recompensa de XP com base na intensidade da batalha.

100: Este é o multiplicador constante que determina a escala geral de recompensa de XP. Multiplicar pelo nível do monstro e pela dificuldade aumenta a recompensa em 100 vezes o valor do nível e da dificuldade.

Entrada
O nível do monstro (um número inteiro).

A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).

Saída
Imprima a quantidade de XP ganhos após a batalha.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada: Saída

45 40:  Voce ganhou 180000 XP!
41 38:  Voce ganhou 155800 XP!
15 20:  Voce ganhou 30000 XP!

### 5️⃣ Capturando pokemons

Descrição
No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander e Mewtwo. Cada treinador escolhe um dos quatro pokemons. Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido.

Entrada
Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur, 2 para Charmander, 4 Pikachu e 5 para Mewtwo.

Saída
A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada: Saída
Escolha o seu Pokemon: 1:	Voce escolheu o Bulbasaur como seu Pokemon inicial.
Escolha o seu Pokemon: 2:	Voce escolheu o Charmander como seu Pokemon inicial.
Escolha o seu Pokemon: 4:	Voce escolheu o Pikachu como seu Pokemon inicial.
Escolha o seu Pokemon: 5:	Voce escolheu o Mewtwocomo seu Pokemon inicial.

### 6️⃣ Coleta de Tesouros no Dungeon

Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

Tarefa: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.

Atenção
Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.

Entrada
O número total de salas no dungeon (um número inteiro).

Saída
Sempre que encontrar um tesouro, imprima " Tesouro na sala X!".

Sempre que encontrar um monstro, imprima "Monstro na sala X!".

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada: Saída
3:
    Tesouro na sala 2!
    Monstro na sala 3!
4:
    Tesouro na sala 2!
    Monstro na sala 3!
    Tesouro na sala 4!
2: Tesouro na sala 2!

### 7️⃣ Geração de Biomas em um Mundo de Blocos

Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

Tarefa: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.

Entrada
O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta.

Saída
Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada: Saída
4:
    1: Carvao
    2: Ferro
    3: Diamante
    4: Pedra
3:
    1: Carvao
    2: Ferro
    3: Diamante
2:
    1: Carvao
    2: Ferro

### 8️⃣ Combinando Nomes de Pokémons

Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

Tarefa: Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

Entrada
A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon.

Saída
A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada: Saída
Bulba:  Bulbasaur
Ivy:    Ivysaur
Venu:   Venusaur

### 9️⃣ Gerenciamento de Itens Mágicos

Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

Entrada
Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

Saída
Imprima o tipo do item, o dano, a resistência e o dano em combate.

Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois this.dano * 2 e quando não for arma, é retornado no dano this.dano.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada
    Saída

Espada
200
300

    Tipo: Espada
    Dano: 200
    Resistencia: 300
    Dano em combate: 200

Cajado
600
800

    Tipo: Cajado
    Dano: 600
    Resistencia: 800
    Dano em combate: 600

Arco
900
500

    Tipo: Arco
    Dano: 900
    Resistencia: 500
    Dano em combate: 900