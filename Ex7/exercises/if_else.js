var randomNumber = Math.random();
if (randomNumber >= 0.5) {
    alert('Mayor que 0.5');
} else {
    alert('Menor que 0.5');
}

var age = 25;
if (age < 2) {
    alert('Bebé');
} else if (age >= 2 && age <= 12) {
    alert('Niño');
} else if (age >= 13 && age <= 19) {
    alert('Adolescente');
} else if (age >= 20 && age <= 30) {
    alert('Joven');
} else if (age >= 31 && age <= 60) {
    alert('Adulto');
} else if (age >= 61 && age <= 75) {
    alert('Adulto mayor');
} else if (age > 75) {
    alert('Anciano');
}
