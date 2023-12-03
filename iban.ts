const getInput = require ('prompt-sync') ({sigint: true});

let cardNumber = getInput('Enter Card Number: ');

let cardNumberisValid = false;

while(!cardNumberisValid){
    if (cardNumber.length > 0 && parseInt(cardNumber) > 0 && validateLuhn(cardNumber)){
        cardNumberisValid = true;
        console.log('Card Number is Valid');
    } else {
        cardNumber = getInput('Invalid Card Number. Enter Card Number: ')
    };
}

function validateLuhn (cardNumber: string) {
    let sum = 0;
for (let i = 0; i < cardNumber.length; i++){
    let digitValue = (cardNumber[i].charCodeAt(0) - '0'.charCodeAt(0));
    if (i % 2 !== 0) { // if i + 1 is even
        // Value of string in position i
        let number = digitValue * 2;
        digitValue = Math.floor(number / 10);
        digitValue += (number % 10);
    } 
    sum += digitValue;
}

return (sum % 10 === 0 );
}