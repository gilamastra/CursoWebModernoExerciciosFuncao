function calc(num1 ,operador,num2){

    switch(operador){
        case '+':
            return num1 + num2;
            break
        case '-':
            return num1 - num2;
            break
        case '/':
            return num1 / num2;
            break
        case '*':
            return num1 * num2;
            break
        
        default:
            return 'Operação invalida'
    }
    
}
console.log(calc(1,'+',2))
console.log(calc(1,'-',2))
console.log(calc(1,'/',2))
console.log(calc(4,'*',12))
console.log(calc(1,'a',2))