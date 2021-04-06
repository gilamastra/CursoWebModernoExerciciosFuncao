var pontuaçoes = [
    10,20,30,15,2,40,25,21
]
var recorde = 0;
var piorjogo =0;
function jogo(pontuaçoes){


    for (let index = 0; index < pontuaçoes.length; index++) {
        const element = pontuaçoes[index];

        if (pontuaçoes[index] > pontuaçoes[index-1]){
            recorde = recorde +1;  }

        piorjogo = pontuaçoes[0]

        if(pontuaçoes[index]< piorjogo ){
            piorjogo = pontuaçoes[index]
        }
    
}}

//console.log(pontuaçoes);


jogo(pontuaçoes)
console.log(`O numero de vezes que o recorde foi batido foi de ${recorde} o resultado do pior jogo foi ${piorjogo} e foi no indice `)