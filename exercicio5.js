function func(valor){
    valor = valor.toFixed(2).replace('.',',')

    
    console.log(`o valor formatado é de R$ ${valor}`)
}

func(2.923912931939219)