
function numbers(i){
    

        for (let j = 2; j <= i; j++) {
            if (i % j !== 0 && i <= 1000 || i==2) {
return "Число простое"

}   
else if (i%j==0 && i <= 1000) {
    return"Число составное";
}
else {
    return "Слишком большое число"
}

        }
    }
numbers(13)