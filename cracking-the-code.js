function codeCrack(sentence) {  
  let words = sentence.split(" ");

  let result = "";
  words.forEach(word => {
    let letter = word[0];

    switch(letter) {
      case 'a': result += word[1];
                break;
      case 'b': result += word[2];
                break;
      case 'c': result += word[3];
                break;
      case 'd': result += word[4];
                break;
    }    
  });

  return result;
}

let output = codeCrack('craft block argon meter bells brown croon droop');
console.log(output);