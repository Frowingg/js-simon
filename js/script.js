let game = true;
let numbers = prodNumbers(1, 100);
let correctedNumbers = [];
alert(numbers)

function prodNumbers(min, max) {
    let tempNumbers = [];
    while(tempNumbers.length<5) {
        number = Math.floor(Math.random() * (max - min + 1) ) + min;
        if(!tempNumbers.includes(number)) {
            tempNumbers.push(number)
        }
    }
    return tempNumbers
}
function userGuess() {
    for(i=1; i<=5; i++) {
        num = parseInt(prompt(`dammi il ${i} numero di 5`))
        // if (numbers.includes(num)) {
        //     correctedNumbers.push(num);
        // }
        if (numbers[i-1] === num) {
            correctedNumbers.push(num);
        }
    } 
    alert(`hai indovinato ${correctedNumbers.length} numeri \n ${correctedNumbers}`)
}

setTimeout(userGuess, 30000);




