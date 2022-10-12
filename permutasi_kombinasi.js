// Permutasi
const n = 5;
const r = 3;

console.log('Permutasi');
console.log('Nilai n:',n);
console.log('Nilai r:',r);

function nilaiN() {
    let factN = 1;
    for (i = 1; i <= n; i++) {
        faktorialN = factN *= i;
    }
    console.log('Faktorial dari n','=',faktorialN)
}

function nilaiX() {
    const x = n-r;
    let factX = 1;
    for (i = 1; i <= x; i++) {
        faktorialX = factX *= i;
    }
    console.log('Faktorial dari n-r','=',faktorialX)
}

nilaiN();
nilaiX();

console.log('Permutasi',r,'dari',n,'objek yang berbeda adalah:',(faktorialN / faktorialX));
console.log('\n')

//Kombinasi
const k = 2;
console.log('Kombinasi')
console.log('Nilai n:',n);
console.log('Nilai k:',k);

function nilaiK() {
    let factK = 1;
    for (i = 1; i <= k; i++) {
        faktorialK = factK *= i;
    }
    console.log('Faktorial dari k adalah:',faktorialK);
}

function nilaiY() {
    const y = n-k;
    let factY = 1;
    for (i = 1; i <= y; i++) {
        faktorialY = factY *= i;
    }
    console.log('Faktorial dari n-k adalah:',faktorialY);
}
nilaiK();
nilaiY();

comb = (faktorialN) / (faktorialK * faktorialY);
console.log('Kombinasi',k,'dari',n,'objek yang berbeda adalah:',comb);
