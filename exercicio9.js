function VerificarNota(nota){
    let notacorrigida = arredondar(nota)
    if(notacorrigida<40){
        console.log('Aluno reprovado');
    }else{
        console.log(`Aluno aprovado com a nota de ${notacorrigida}`);
    }


}
function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}


VerificarNota(40)
VerificarNota(53)
VerificarNota(56)
VerificarNota(58)
VerificarNota(66)