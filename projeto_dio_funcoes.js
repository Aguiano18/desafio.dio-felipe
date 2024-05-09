var vitory = 30;
var defe = 5;
mensagem();

function mmrJogador(vitorias, derrotas) {
    let cauculo = vitorias - derrotas
    return cauculo
}

function eloDoJogador(Elo){
    switch (true) {
        case (Elo <= 10):
            return "Ferro";
        case (Elo <= 20 && Elo >= 11):
            return "Bronze";
        case (Elo <= 50 && Elo >= 21):
            return "Prata";
        case (Elo <= 80 && Elo >= 51):
            return "Ouro";
        case (Elo <= 90 && Elo >= 81):
            return "Diamante";
        case (Elo <= 100 && Elo >= 91):
            return "Lendário";
        case (Elo >= 101):
            return "Imortal";
    }
}

function mensagem(){
    let mmr = mmrJogador(vitory, defe);
    let Rank = eloDoJogador(mmr);
    let texto = `O jogador tem um saldo de ${mmr} vitórias e está no Rank ${Rank}`
    console.log(texto);
}