let game = true;
let numbers = prodNumbers(1, 100);
alert(numbers)
console.log(numbers)

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
function userGuess() {
    for(i=1; i<=5; i++) {
        num = parseInt(prompt('dammi un numero'))
        if (numbers.includes(num)) {
            alert('bravo');
        } else {
            alert('sei na pippa!');
            break;
        }
    alert('hai vinto!')
    } 

}

setTimeout(userGuess, 3000);




