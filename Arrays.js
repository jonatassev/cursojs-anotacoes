// Declarando...
const valores = [7, 8.1, 60, 25.7]

// imprimindo valores...
console.log(valores[0], valores[3])

// Tentando executar indice inexistente:
console.log(valores[4])
// retorna: undefined

// Atribuindo valor ao índice não utilizado
valores[4] = 10
console.log(valores)
// Atribuindo valores ao Array
valores.push({id: 3}, false, null, 'teste')

// mostra o último valor do Array e tirando
console.log(valores.pop())

// excluindo valores no Array
delete valores[0]
console.log(valores)

console.log(typeof valores)