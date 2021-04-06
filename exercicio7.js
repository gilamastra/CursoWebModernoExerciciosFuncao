function bhask(a,b,c){
    var resultado = (b*b) - (4 * a * c)
    if(resultado < 0){
        return "Delta é negativo"
    }
    x1 = (-b + a**a) / 2 * a
    x2 = (-b - a**a) / 2 * a


    return (`X1 é ${x1} e X2 é ${x2}`)
}

console.log(bhask(1, 3, 2))
console.log(bhask(3, 1, 2))