const Input = require('prompt-sync')({sigint: true});

console.log('1. Process String to Binary');
console.log('2. Process Binary to String');

let choice: string = Input('Pick an option (1 or 2): ');

let string: string;
let binary: string;

if (choice === '1') {
    string = Input('Enter String: ');
    console.log('You chose to process the string:', string);
    console.log(string2binary(string));

} else if (choice === '2') {
    binary = Input('Enter Binary: ');
    console.log('You chose to process the binary:', binary);
    console.log(binary2string(binary));

} else {
    console.log('Invalid choice. Please enter 1 or 2.');
}


function string2binary(input: string): string {
    let binaryConversionResult = '';

    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        const binaryValue = charCode.toString(2);
        binaryConversionResult += binaryValue.padStart(8, '0');
    }

    return binaryConversionResult;
}

function binary2string(input: string): string {
    let stringConversionResult = '';

    for (let i = 0; i < input.length; i = i + 8) {
        let FirstByte = input.substring(i, i + 8);
        let FirstByteInteger = parseInt(FirstByte, 2)
        stringConversionResult +=  String.fromCharCode(FirstByteInteger); 
    }

    return stringConversionResult;
}