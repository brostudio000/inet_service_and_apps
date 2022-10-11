const angka1 = ('2');
const angka2 = ('5');
const operator = ('+');

let hasil;

if (operator == '+') {
    hasil = Number(angka1) + Number(angka2);
}
else if (operator == '-') {
    hasil = angka1 - angka2;
}
else if (operator == '*') {
    hasil = angka1 * angka2;
}
else if (operator == '/') {
    hasil = angka1 / angka2;
}

console.log(angka1, operator, angka2, '=', hasil);