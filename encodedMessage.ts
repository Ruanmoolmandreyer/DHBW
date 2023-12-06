const getMessage = require ('prompt-sync') ({sigint: true});

console.log('Please enter password');

let password: string = getMessage('Password:');

function getPassword(): void {
    console.log('Enter your password');
    for (let i = 0; i < 1; i++) {
        if (password === 'Ruan1998') {
            console.log('Access Granted!')
        } else {
            console.log('Nice try, but try again...')
            password = getMessage('Password:');
            i--;
        }
    }
}

function encodeMessage(message: string): string {
    let encodedMessage = '';
    const shift = 2;
    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        charCode = Math.floor(charCode + shift);
        encodedMessage += String.fromCharCode(charCode);
    }

    return encodedMessage;
}

function decodeMessage(encodedMessage: string): string {
    const shift = 2;
    let decodedMessage = '';
    for (let i = 0; i < encodedMessage.length; i++) {
        let charCode = encodedMessage.charCodeAt(i);
        charCode = Math.floor(charCode - shift);
        decodedMessage += String.fromCharCode(charCode);
    }

    return decodedMessage;
}

getPassword();

let pickOne: string;
let encode: string; 
let decode: string;

do {
    console.log('1. Encode a message' );
    console.log('2. Decode a message' );

    pickOne = getMessage('Pick either 1 or 2...');
    
    if (pickOne === '1') {
        encode = getMessage ('Enter a message that you would like to encode: ');
        console.log(encodeMessage(encode));

    } else if (pickOne === '2') {
        decode = getMessage ('Enter a message that you would like to decode: ');
        console.log(decodeMessage(decode));
    } else {

        console.log('I said 1 or 2?');
    }
} while (pickOne !=='1' && pickOne !=='2');

