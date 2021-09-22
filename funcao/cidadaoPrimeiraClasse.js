// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1(){ return "Executando..."}

// Armazenar a funcao em uma variável 
const fun2 = function () { console.log("Executando...") }

// Armazenar uma função dentro de um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em atributo de um objeto
const obj = {}
obj.falar = function () { return "Ola"}
console.log(obj.falar())

// Passar uma função como parâmetro
function run(fun) {
    fun()
}

run(fun2)

// Função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1,2)(3)

const soma2 = soma(1,2)
soma2(3)