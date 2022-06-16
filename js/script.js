function prodNumbers(min, max) {
    let tempNumbers = [];
    for(i=1; i<=5; i++) {
        number = Math.floor(Math.random() * (max - min + 1) ) + min;
        if(tempNumbers.includes(number)) {
            i--;
        } else {
            tempNumbers += number + ' '
        }
    }
    return tempNumbers
}
let game = true;
let numbers = prodNumbers(1, 100);
alert(numbers)
console.log(numbers)

setTimeout(userGuess(numbers), 30000);
console.log(timer)

function userGuess(numbers) {
    for(i=1; i<=5;i++) { 
        while (game) {      
            num = parseInt(prompt('prova a indovinare i 5 numeri di prima'));
            if(numbers.includes(num)) {
                alert('azzeccato!');
            } else {
                alert('hai sbagliato!');
                game = false;
            }
        }     
        alert('hai vinto!');
        game = false; 
    }
    
}

