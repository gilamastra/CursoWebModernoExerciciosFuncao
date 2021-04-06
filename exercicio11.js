function anoBisexto(ano){

    if(ano <= 0 ){
        console.log('Nao é ano bisexto');
        return false;
    }
    if(ano % 400 == 0){
        console.log('Ano bisexto');
        return true
    }
    if(ano % 4 == 0 ){
        if(ano % 100 == 0){
            console.log('Não é ano bisexto');
        }else{
            console.log('Ano bisexto');
            
        }
    }else{

        console.log('Não é ano bisexto');
    }

}


anoBisexto(0)
anoBisexto(4)
anoBisexto(100)
anoBisexto(400)
anoBisexto(800)
anoBisexto(2020)
anoBisexto(2021)
