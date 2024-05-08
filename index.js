let Personagem= "Amauri";
let Experiencia = 7000;
let Elo = null;

if (Experiencia <= 1000){
    Elo = "Ferro";
}

if (Experiencia <= 2000 && Experiencia >= 1001){
    Elo = "Bronze";
}

if (Experiencia <= 5000 && Experiencia >= 2001){
    Elo = "Prata";
}

if (Experiencia <= 7000 && Experiencia >= 5001){
    Elo = "Ouro";
}

if (Experiencia <= 8000 && Experiencia >= 7001){
    Elo = "Platina";
}

if (Experiencia <= 9000 && Experiencia >= 8001){
    Elo = "Ascendente";
}

if (Experiencia <= 10000 && Experiencia >= 9001){
    Elo = "Imortal";
}

if (Experiencia >= 10001){
    Elo = "Radiante";
}

const Heroi = "O jogador:" + Personagem + " Possui o Elo:" + Elo;

console.log(Heroi);