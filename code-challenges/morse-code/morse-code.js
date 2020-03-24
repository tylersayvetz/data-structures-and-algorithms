const morseKey = new Map();
const alphaKey = new Map();

const morseArr = [
  { 'a': '.-' },
  { 'b': '-...' },
  { 'c': '-.-.' },
  { 'd': '-..' },
  { 'e': '.' },
  { 'f': '..-.' },
  { 'g': '--.' },
  { 'h': '....' },
  { 'i': '..' },
  { 'j': '.---' },
  { 'k': '-.-' },
  { 'l': '.-..' },
  { 'm': '--' },
  { 'n': '-.' },
  { 'o': '---' },
  { 'p': '.--.' },
  { 'q': '--.-' },
  { 'r': '.-.' },
  { 's': '...' },
  { 't': '-' },
  { 'u': '..-' },
  { 'v': '...-' },
  { 'w': '.--' },
  { 'x': '-..-' },
  { 'y': '-.--' },
  { 'z': '--..' },
  { 1: '.----' },
  { 2: '..---' },
  { 3: '...--' },
  { 4: '....-' },
  { 5: '.....' },
  { 6: '-....' },
  { 7: '--...' },
  { 8: '---..' },
  { 9: '----.' },
  { 0: '-----' },
]

morseArr.forEach(morse => {
  const [key, value] = Object.entries(morse)[0];
  morseKey.set(key, value);
})
morseArr.forEach(morse => {
  const [key, value] = Object.entries(morse)[0];
  alphaKey.set(value, key);
})




function morseCode(str) {
  //this is the character we split the string on.
  const splitChar = str.charAt(0) === '.' || str.charAt(0) === '-' ? '/' : ''

  //this is the array of all the split characters.
  const strArr = str.toLowerCase().split(splitChar)
  let output = '';
  strArr.forEach(elem => {                     
    //forwards translation
    if (splitChar === '') {
      if (elem === ' ') output += ' /';
      if (morseKey.has(elem)) {
        output += (morseKey.get(elem) + '/')
      } 
    //trying to do a backward translation.
    } else if (splitChar === '/') {
      if (elem === ' ') output += ' '
      else output += alphaKey.get(elem)
    }
  })
  return output
}

const sampleString = "hi my name is wonderwall. Im an oasis. An oasis in your mind. My best friend is r2d2 and he is 69333788 seconds old"
const morseString = "..../../ /--/-.--/ /-./.-/--/./ /../.../ /.--/---/-./-.././.-./.--/.-/.-../.-../ /../--/ /.-/-./ /---/.-/.../../.../ /.-/-./ /---/.-/.../../.../ /../-./ /-.--/---/..-/.-./ /--/../-./-../ /--/-.--/ /-..././.../-/ /..-./.-./.././-./-../ /../.../ /.-./..---/-../..---/ /.-/-./-../ /...././ /../.../ /-..../----./...--/...--/...--/--.../---../---../ /..././-.-./---/-./-../.../ /---/.-../-../"
console.log(morseCode(morseString))

