// Conceitos e diferenças

// Quando atribui valor de objeto, os dois apontam para o mesmo lugar
const a = {name: 'Teste'}
console.log(a)
const b = a
console.log(b)

// ou seja, nesse caso se eu setar 'a', a variável 'b' vai sentir a mesma diferença

a.name = 'jojo'
console.log(b)

// -------------------------------------------------------------

let valor // Declarado, porém não inicializado
console.log(valor)
// Retorna undefined 

console.log(valor2) // Nem foi declarado
// Retorna is not defined

valor = null // Ausência de valor (Não aponta pra nenhum local da memória)
console.log(valor)

//console.log(valor.toString()) //Erro!