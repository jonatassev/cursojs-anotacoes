// Função sem retorno

function imprimirSoma (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
// Imprime 5

imprimirSoma(2)
imprimirSoma(2, 6, 4, 5, 6, 7)
// Imprime NaN pois o que não foi passado por parâmetro é Undefined 

// Funcao com retorno
function soma(a, b = 2) {
    return a + b
}
console.log(soma(1, 4))