class heroi{
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque (tipo){
        let tipatak = "";

        if (tipo === "mago"){
            tipatak = "magia";
        }else if(tipo === "guerreiro"){
            tipatak = "espada";
        }else if(tipo === "monge"){
            tipatak = "artes marciais";
        }else if(tipo === "ninja"){
            tipatak = "shuriken";
        }
        console.log(`o ${tipo} atacou usando ${tipatak}`);
    }
}
var palyerName = "Amauri";
var Old = "16";
var Clase = "guerreiro";

var jogador = new heroi(palyerName, Old, Clase);
jogador.ataque(Clase);