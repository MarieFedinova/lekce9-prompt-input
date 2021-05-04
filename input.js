let sirka;
let vyska;
let hloubka;
let mojeSirka = 62;
let mojeVyska = 70;
let mojeHloubka = 80;
let vysledek = document.querySelector('#vysledek');
let soucetEl = document.querySelector('#soucet');

function ukazPrompt() {
    sirka = prompt("Zadejte šířku");
    vyska = prompt("Zadejte výšku");
    hloubka = prompt("Zadejte hloubku");
    porovnejRozmery();
}

function porovnejRozmery() {
    if (parseInt(sirka) <= mojeSirka && parseInt(vyska) <= mojeVyska && parseInt(hloubka) <= mojeHloubka) {
        vysledek.textContent = 'Pračka se vejde.';
    } else {
        vysledek.textContent = 'Pračka se nevejde.';
    }
}

function secti() {
    let cislo1 = parseInt(document.querySelector("input[name=cislo1]").value);
    let cislo2 = parseInt(document.querySelector("input[name=cislo2]").value);
    let soucet = cislo1 + cislo2;
    soucetEl.textContent = soucet;
}

function zkontrolujCislo() {
    let rodneCislo = document.querySelector("input[name=rodne-cislo]").value;
    let rokNarozeni = parseInt(rodneCislo.substring(0, 2));
    if (rodneCislo.length === 9 && rokNarozeni <= 54) console.log('ok');
    else if (rodneCislo.length === 10) console.log('ok');
    else console.log('špatně');
    
}

// let jmeno;
// let input = document.querySelector("input[name=cislo1]");

// function ziskejJmeno() {
//     jmeno = input.value;
//     console.log(jmeno);
// }

// input.addEventListener('change', ziskejJmeno);