var tab = new Array (10)
for (var i = 0; i < tab.length; i++) {
    tab[i] = new Array(10)
}
// Inicializa o Array
for(var b = 0; b < tab.length; b++){
    for(var c = 0; c < tab[b].length; c++) {
        tab[b][c] = b * c;
    }
}
// Calcular o array muldimensional para 5 * 7
var product = tab[5][7]