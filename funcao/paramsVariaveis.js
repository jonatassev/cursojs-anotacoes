// trabalhando com um número indeterminado de parâmetros
function soma() {
    let soma = 0 
    for (i in arguments) {
        if (typeof arguments[i] === "string") {
            return "Soma inválida!"
        }
        
        soma += arguments[i]
    }
    return soma
}


console.log(soma())
console.log(soma(1, 3))
console.log(soma(3,3,4,1))

console.log(soma(3,3,'e','t'))