let a = 1;
let b = 5;

console.log(a);

for (let i = 2; i <= b; i++) {
    if(i%2!=0) {
        a = a - i;
        console.log('-', i);
    } else {
        a = a + i;
        console.log('+', i);
    }
}

console.log('Total = ',a)