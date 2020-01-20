// Conceito: Jogar a declaração das variáveis para cima

console.log('a =', a)
var a = 2
console.log('a =', a)
// retorna a = undefined
//         a = 2

function teste() {
    console.log('b =', b)
    var b = 2
    console.log('b =', b)
}
teste() // Acontece o mesmo

console.log('c =', c)
let c = 2
console.log('c =', c)

// Não funciona o hosting