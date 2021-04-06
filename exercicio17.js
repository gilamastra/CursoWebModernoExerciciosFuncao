function planoAumento(plano , Salario){
    switch (plano) {
        case 'A':
            aumento = (Salario/100) * 10
            console.log(`O seu plano é o A e o seu salario novo é de ${Salario + aumento}`)
            break;
        case 'B':
            aumento = (Salario/100) * 15
            console.log(`O seu plano é o B e o seu salario novo é de ${Salario + aumento}`);
            break
        case 'C':
            aumento = (Salario/100) * 20
            console.log(`O seu plano é o C e o seu salario novo é de ${Salario + aumento}`);
            break
        default:
            console.log(`Plano invalido`);
            break;
    }
}
planoAumento('A', 1000)
planoAumento('B', 1000)
planoAumento('C', 1000)
planoAumento('A', 1500)
planoAumento('D', 1000)