// 1° 
function siempreHambriento (arr) {
    let tengoHambre = 1;
    for (i = 0; i < arr.length ; i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
            tengoHambre = 0;
        }
    }
        
    if (tengoHambre != 0) {
        console.log("Tengo Hambre")
    }   
}
siempreHambriento([3.14, "helado", "pastel", "pan", 7]);
// 2°
function highPass (arr, cutoff){
    let filteredArr = [];
    for (i = 0; i < arr.length ; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
let result = highPass ([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);
// 3°
function betterThanAverage (arr) {
    let sum = 0;
    for (i = 0; i < arr.length ; i++){
        sum = sum + arr[i];
    }
    let average = sum / arr.length;
    let count = 0;

    for (i = 0; i < arr.length; i++){
        if(arr[i] > average) {
            count += 1;
        }
    }
    return count;
}

let resultado = betterThanAverage ([6, 8, 3, 10, -2, 5, 9]);
console.log(resultado);
// 4°

function reverse(arr){
    arrrev = []
    for (i = arr.length - 1; i >= 0; i--){
        arrrev.push(arr[i]);
    }
    return arrrev;
}
let resultado1 = reverse(["a", "b", "c", "d", "e"]);
console.log(resultado1)

//5°
function fibonacciArray(n){
    let fibArr = [0,1];
    for (i = 2; i < n ; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
}
let resultado2 = fibonacciArray(10);
console.log(resultado2);