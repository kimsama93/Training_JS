const tb = [2, 3, 4, 45, 6, 7, 8, 9, 0, 11, 23];
let somme = 0;

for (let c = 0; c < tb.length; c++) {
  //console.log(tb[c]);
  somme += tb[c];
}

console.log("La somme des éléments du tableau est " + somme);
