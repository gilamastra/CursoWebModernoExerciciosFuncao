function factorialCalc(num){


    if (num == 0){
        return 1 
    }else{
        return num * factorialCalc(num -1 )
    }
}

console.log(factorialCalc(10))