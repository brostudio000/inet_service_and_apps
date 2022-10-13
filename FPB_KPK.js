function cariFPB() {
    let fpb;
    const a = 32;
    const b = 48;

    for (let i=1; i<=a && i<=b; i++) {
        if (a % i == 0 && b % i == 0) {
            fpb = i;
        }
    }

    console.log('FPB dari',a,'dan',b,'adalah:',fpb);
}
cariFPB();

function cariKPK() {
    let fpb;
    const c = 32;
    const d = 48;

    for (let i=1; i<=c && i<=d; i++) {
        if (c % i == 0 && d % i == 0) {
            fpb = i;
        }
    }

    kpk = c * d / fpb;

    console.log('KPK dari',c,'dan',d,'adalah:',kpk);
}
cariKPK();