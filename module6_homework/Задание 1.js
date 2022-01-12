function OddEven() {

let arr=[1, 0, 2, "dd", true, 10]
let even=0;
let odd=0;

for(let i=0;i<arr.length;i++){
    if (arr[i]%2===0 && arr[i]!==0 && typeof arr[i]==="number") {
    even++
}
else  if (arr[i]%2!==0 && typeof arr[i]==="number") {
    odd++
}
else if (arr[i]===0) {
    console.log (0)
}
}
console.log ("even "+even)
console.log ("odd "+odd)
}
OddEven()