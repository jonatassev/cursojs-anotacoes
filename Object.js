// Criando objeto de forma literal
const prod1 = {}

// par de chaves {} cria um objeto de forma literal

prod1.nome = 'Celular Ultra Mega' // evitar atributos com espaço
prod1.preco = 4248.2

console.log(prod1) 

// Objeto dentro de objeto

const prod2 = {
    nome: 'Jonatas',
    compra: 79.90,
    Teste: {
        numeroProva: 54354,
        nota: 10.0
    }
}

console.log(prod2)