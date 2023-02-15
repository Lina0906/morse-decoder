const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

MORSE_TABLE['**********'] = " ";

function decode(expr) {
    // write your solution here
    const binMorseTable = {};
  for (let key in MORSE_TABLE) {
    let binKey = key.replaceAll(".", "10").replaceAll("-", "11");

    if (binKey.length < 10) { binKey = '0'.repeat(10 - binKey.length) + binKey };    

    binMorseTable[binKey] = MORSE_TABLE[key];    
  };
  
  const exprArr = [];

  for (let i = 0; i < expr.length; i += 10) {
    exprArr.push(expr.slice(i, i + 10));
  }; 

  const resultArr = exprArr.map((element) => {
   return binMorseTable[element];
  });

  return resultArr.join('');
}

module.exports = {
    decode
}

