const reverseString = function(string) {
   let arrayOfString = string.split('')
   let reversed = ''

   for(let i = arrayOfString.length - 1; i > -1; i--){
    reversed += arrayOfString[i]
   }
   
   return reversed
   //return string.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
