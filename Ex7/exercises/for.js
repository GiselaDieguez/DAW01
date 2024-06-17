var words = ['manzana', 'banana', 'cereza', 'sandia', 'kiwi'];
for (var i = 0; i < words.length; i++) {
    alert(words[i]);
}

for (var i = 0; i < words.length; i++) {
    var capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    alert(capitalizedWord);
}

var sentence = '';
for (var i = 0; i < words.length; i++) {
    sentence += words[i] + ' ';
}

alert(sentence.trim());

var numbersArray = [];
for (var i = 0; i < 10; i++) {
    numbersArray.push(i);
}
console.log(numbersArray);