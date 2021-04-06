function comprarCarro(carro){
    switch(carro){
        case "hatch":
            console.log("Compra efetuada com sucesso”");
            break

        case "sedan":
            console.log("Tem certeza que não prefere este modelo?" );
            break
        case "motocicleta":
            console.log("Tem certeza que não prefere este modelo?" );
            break
        case "caminhonete":
            console.log("Tem certeza que não prefere este modelo?" );
            break

        default:
            console.log("Não trabalhamos com esse tipo de automóvel aqui");
            break
        }

}

comprarCarro('motocicleta')
comprarCarro('hatch')
comprarCarro('caminhonete')
comprarCarro('sedan')
comprarCarro('aaaa')
comprarCarro('vas')