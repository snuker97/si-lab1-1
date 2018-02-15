let userText = 'Incercam sa lucram cu coduri si criptari.';
let userTextAsterix = userText.replace(/ /g , "*");
let userTextDevided = [];

let key = 'criptam';
let keyArray = key.split('');
let keyCodeTrue = [];

let crypt = '';


for(let i = 0; i < userTextAsterix.length; i += 7) {
    if (userTextAsterix.substring(i, i + 7).length === 7) {
      userTextDevided.push(userTextAsterix.substring(i, i + 7));
    }
    else {
      let missingWords = 7 - userTextAsterix.substring(i, i + 7).length;
      userTextDevided.push(userTextAsterix.substring(i, i + 7) + '*'.repeat(missingWords));
    }
}


// Asign letter position number of KEY with comparation
for(let i = 0; i < keyArray.length; i++) {
  let counter = 0;
  
  for (let j = 0; j < keyArray.length; j++) {
    
    if (keyArray[i] < keyArray[j]) {
//       console.log(keyArray[i] + ' < ' + keyArray[j] + '\tT');
    }
    
    else {
//       console.log(keyArray[i] + ' < ' + keyArray[j] + '\tF');
      counter++;
    }
    
  }
  

  keyCodeTrue.push(counter);
}

for(let i = 1; i <= keyCodeTrue.length; i++) {
  let position = keyCodeTrue.indexOf(i);
  console.log(position);
  for(let j = 0; j < userTextDevided.length; j++) {
    crypt += userTextDevided[j][position];
  }
}


console.log(userTextAsterix);
console.log(userTextDevided);
console.log(keyCodeTrue);
console.log(crypt);