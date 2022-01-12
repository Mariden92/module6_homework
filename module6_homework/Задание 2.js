
function numbers(){
    
i=prompt("Число");
        for (let j = 2; j < i; j++) {
            if (i % j !== 0 && i!==0 && i<=1000 && i==2) {
console.log ("Число простое");
break;
}   

else if (i>1000 && i==0) {
    console.log ("Данные неверные");
    break;
}

            else  {
                console.log ("Число составное");
                break;
            }
     }
 }
numbers()