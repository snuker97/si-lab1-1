let userText2;


document.getElementById('user-text2').addEventListener('keyup', () => {
    let userText2Code = [];

    let generatedKeyCode = [];
    let generatedKeyWord = '';

    let cryptCode = [];
    let cryptWord = '';

    userText2 = document.getElementById('user-text2').value.toUpperCase();
    console.log(userText2);

    for (let i = 0; i < userText2.length; i++) {
        let randomNum = Math.floor(Math.random() * 26);

        if (userText2.charCodeAt(i) >= 65 && userText2.charCodeAt(i) <= 90) {
            userText2Code.push(userText2.charCodeAt(i) - 65);

            // Generarea cuvintelor unice pentru cheie
            while (generatedKeyCode.indexOf(randomNum) !== -1) {
                randomNum = Math.floor(Math.random() * 26);
            }
            generatedKeyCode.push(randomNum);
        }
    }


    for (let i = 0; i < generatedKeyCode.length; i++) {
        cryptCode.push((userText2Code[i] + generatedKeyCode[i]) % 26);
    }

    for (let i = 0; i < cryptCode.length; i++) {
        cryptWord += String.fromCharCode(cryptCode[i] + 65);
    }

    console.log(userText2Code);
    console.log(generatedKeyCode);
    console.log(cryptCode);
    console.log(cryptWord);

    // Afisarea cheiei in cuvinte
    for (let i = 0; i < generatedKeyCode.length; i++) {
        generatedKeyWord += String.fromCharCode(generatedKeyCode[i] + 65);
    }

    if (userText2.length) {
        document.getElementsByTagName('label')[8].classList.add('active');
        document.getElementsByTagName('label')[9].classList.add('active');
        document.getElementById('disabled2').value = generatedKeyWord;
        document.getElementById('disabled2-1').value = cryptWord;
    }
    else {
        document.getElementsByTagName('label')[8].classList.remove('active');
        document.getElementsByTagName('label')[9].classList.remove('active');
        document.getElementById('disabled2').value = '';
        document.getElementById('disabled2-1').value = '';
    }
});


