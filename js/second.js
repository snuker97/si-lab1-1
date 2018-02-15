let userText1;
let key;

document.getElementsByTagName('label')[5].style.width = '450px';

document.getElementById('user-text1').addEventListener('keyup', () => {
    if (document.getElementById('user-key').value.length > document.getElementById('user-text1').value.length) {
        return invalid();
    }
    else if (document.getElementById('user-key').value.length) {
        crypt1();
    }
});

document.getElementById('user-key').addEventListener('keyup', () => {
    if (document.getElementById('user-key').value.length > document.getElementById('user-text1').value.length) {
        return invalid();
    }
    else if (document.getElementById('user-key').value.length) {
        crypt1();
    }
});

const crypt1 = () => {
    document.getElementById('user-key').classList.remove('invalid');
    document.getElementById('user-key').classList.add('valid');
    document.getElementById('user-key').classList.add('validate');

    let userText1ToChar = [];
    let cryptedText = "";

    userText1 = document.getElementById('user-text1').value.toUpperCase();
    console.log(userText1);

    key = document.getElementById('user-key').value;
    console.log(key);

    for (let i = 0; i < userText1.length; i++) {
        if (userText1.charCodeAt(i) >= 65 && userText1.charCodeAt(i) <= 90) {
            userText1ToChar.push(userText1.charCodeAt(i) - 65);
        }
    }

    for (let i = 0; i < userText1ToChar.length; i++) {
        let keyPosition = i % key.length;

        cryptedText += String.fromCharCode(+(userText1ToChar[i]) + +(key[keyPosition]) + 65);
    }

    console.log(cryptedText);

    if (cryptedText.length) {
        document.getElementsByTagName('label')[6].classList.add('active');
        document.getElementById('disabled1').value = cryptedText;
    }
    else {
        document.getElementsByTagName('label')[6].classList.remove('active');
        document.getElementById('disabled1').value = '';
    }

};

const invalid = () => {
    document.getElementById('user-key').classList.add('invalid');
    document.getElementById('user-key').classList.remove('valid');
    document.getElementById('user-key').classList.remove('validate');
};





