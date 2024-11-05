const palindromes = function (word) {
    let validchars = 'qwertyuioplkjhgfdsazxcvbnm1234567890'

    let plainString = word.toLowerCase().split('').filter((char) => validchars.includes(char)).join('')

    let reversed = plainString.split('').reverse().join('')

    return reversed === plainString
};


// Do not edit below this line
module.exports = palindromes;
