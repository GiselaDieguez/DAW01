var text = 'Lorem ipsum dolor sit amet';
var upperText = text.toUpperCase();
console.log(upperText);

var newText = text.substring(0, 5);
console.log(newText);

var lastThreeChars = text.substring(text.length - 3);
console.log(lastThreeChars);

var capitalizedText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
console.log(capitalizedText);

var whitespacePosition = text.indexOf(' ');
console.log('La posición del primer espacio en blanco es: ' + whitespacePosition);

var longText = 'javascript programación';
var firstSpaceIndex = longText.indexOf(' ');
var firstWord = longText.substring(0, firstSpaceIndex);
var secondWord = longText.substring(firstSpaceIndex + 1);
var formattedText = firstWord.charAt(0).toUpperCase() + firstWord.substring(1).toLowerCase() + ' ' + secondWord.charAt(0).toUpperCase() + secondWord.substring(1).toLowerCase();
console.log(formattedText);
