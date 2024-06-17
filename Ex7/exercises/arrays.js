var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[4]);
console.log(months[10]);

var sortedMonths = months.slice().sort(); 
console.log(sortedMonths);

months.unshift('PrimerMes');
months.push('UltimoMes');
console.log(months);

months.shift();
months.pop();
console.log(months);

var reversedMonths = months.slice().reverse(); 
console.log(reversedMonths);

var joinedMonths = months.join('-');
console.log(joinedMonths);

var midYearMonths = months.slice(4, 11);
console.log(midYearMonths);
