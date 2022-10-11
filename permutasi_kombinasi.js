// Permutasi
const n = 5;
const r = 3;

function nilaiN() {
    let factN = 1;
    for (i = 1; i <= n; i++) {
        faktorialN = factN *= i;
    }
    console.log('Faktorial dari',n,'=',faktorialN)
}

function nilaiX() {
    const x = n-r;
    let factX = 1;
    for (i = 1; i <= x; i++) {
        faktorialX = factX *= i;
    }
    console.log('Faktorial dari',n,'-',r,'=',faktorialX)
}
nilaiN();
nilaiX();

console.log('Permutasi',r,'dari',n,'adalah:',(faktorialN / faktorialX));

// Kombinasi (otw maszeh hehe)