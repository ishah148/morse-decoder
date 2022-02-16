const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let tempDecWords = []
    let tempResult = []
    let newWord = ''
    expr.split('**********')
    .forEach((item) => {
        for (i = 0; i < item.length / 10; i++) {
            tempDecWords[i] = item.slice(i * 10, i * 10 + 10)
        }
        tempDecWords.forEach((item, index) => {
            for (let i = 0; i < 10; i += 2) {
                tempResult.push(item.slice(i, i + 2) === '11' ? '-' : item.slice(i, i + 2) === '10' ? '.' : '')
            }
            newWord += MORSE_TABLE[tempResult.join('')]
            tempResult = []
            tempDecWords = []
        });
        newWord += ' '
    })
    return newWord.slice(0, -1) // result
}

module.exports = {
    decode
}

