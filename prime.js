const angka = ('5')
let prima = true;

if(angka == 1) {
    console.log('Angka 1 bukan angka prima');
}

else if (angka > 1) {
    for (let i = 2; i < angka; i++) {
        if (angka % i == 0) {
            prima = false;
            break;
        }
    }
    if (prima) {
        console.log(angka, 'adalah bilangan prima');
    }
    else {
        console.log(angka, 'bukan bilangan prima');
    }
}