function tipoTriangulo(lado1,lado2,lado3){
    if(lado1 == lado2 & lado2 == lado3 ){
        console.log('Triangulo Equilátero')
    }else if (lado1 == lado2 | lado1 == lado3){
        console.log('Triangulo Isósceles')
    }else{
        console.log('Triangulo Escaleno')
    }
    
}

tipoTriangulo(2, 2, 2)
tipoTriangulo(2, 3, 3)
tipoTriangulo(2, 3, 4)